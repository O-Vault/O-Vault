import { app, BrowserWindow, Menu } from "electron";
import { registerIpcEvents } from './ipcMain';
import { util } from "./util";

if (!app.requestSingleInstanceLock()) {
  console.log("Another instance is already running");
  app.exit();
}

const createWindow = async (): Promise<void> => {
  const win = util.createWindow(250, 500, -1, -1, null);

  win.setMaximumSize(500, 2000);
  win.setMinimumSize(200, 170);

  return await util.loadRoute(win, '/');

};

const getMainWindow = () => {
  return BrowserWindow.getAllWindows().filter(w => {
    return w.getParentWindow() === null;
  })[0];
};

const focusAndRestoreWindow = () => {

  const win = getMainWindow();

  if (win.isMinimized()) {
    win.restore();
    
  } 
  app.focus();
};

const customizeMenu = () => {
  const menu = Menu.getApplicationMenu();
  menu.items.forEach(menuItem => {
    if (menuItem.role === 'viewMenu'.toLowerCase() ||
        menuItem.role === 'fileMenu'.toLowerCase() ||
        menuItem.role === 'windowMenu'.toLowerCase() ||
        menuItem.role === 'help' ) {
      menuItem.visible = false;
      menuItem.enabled = false;
    }
  });
  Menu.setApplicationMenu(menu);
};

app.whenReady().then(async () => {

  customizeMenu();
  await createWindow();

  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('second-instance', () => {
  focusAndRestoreWindow();
});

registerIpcEvents(app);