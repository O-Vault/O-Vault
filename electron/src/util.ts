import { BrowserWindow, screen, shell } from "electron";
import * as path from "path";
import { isDev } from "./electronIsDev";

const loadRoute = (win: BrowserWindow, route: string, modalArguments:object = undefined): Promise<void> => {

    const initialRoute = (route) ? route : '/';
    const modalArgs = (win.isModal && modalArguments !== undefined) ? btoa( JSON.stringify(modalArguments) ): '';
    if (isDev) {
        return win.loadURL(`http://localhost:3000?route=${initialRoute}&modalArgs=${modalArgs}`);
    } else {
        const url = `${__dirname}/../web/index.html`;
        return win.loadFile(url, { search: `route=${initialRoute}&modalArgs=${modalArgs}` });
    }
};

const centerWithParent = (parent: BrowserWindow, win: BrowserWindow) => {
    const primaryDisplay = screen.getPrimaryDisplay();
    primaryDisplay.workAreaSize.width;

    const parentX = parent.getPosition()[0];
    const parentY = parent.getPosition()[1];
    const parentWidth = parent.getSize()[0];
    const parentHeight = parent.getSize()[1];
    const winWidth = win.getSize()[0];
    const winHeight = win.getSize()[1];
    let newX = parentX - Math.ceil((winWidth - parentWidth) / 2);
    let newY = parentY - Math.ceil((winHeight - parentHeight) / 2);
    if (newX < 0) {
        newX = 20;
    }
    if (newY < 0) {
        newY = 20;
    }
    if (newX + winWidth > primaryDisplay.workAreaSize.width) {
        newX = primaryDisplay.workAreaSize.width - winWidth - 20;
    }
    if (newY + winHeight > primaryDisplay.workAreaSize.height) {
        newY = primaryDisplay.workAreaSize.height - winHeight - 20;
    }
    win.setPosition(newX, newY);
};

const createWindow = (width: number, height: number, posX:number, posY:number, parent: BrowserWindow) => {

    const win = new BrowserWindow({
        icon: path.join(__dirname, '../images/app-icon-medium.png'),
        width: Math.round( width * (parent != null ? parent.webContents.getZoomFactor() : 1.0) ),
        height: Math.round( height * (parent != null ? parent.webContents.getZoomFactor() : 1.0) ),
        show: false,
        transparent: true,
        alwaysOnTop: false,
        frame: false,
        parent: parent,
        resizable: parent === null,
        darkTheme: true,
        hasShadow: false, // if true would add a bug: squared border on the bottom left + round one
        modal: parent !== null,
        
        webPreferences: {
            zoomFactor: parent != null ? parent.webContents.getZoomFactor() : 1.0,
            nodeIntegration: true,
            contextIsolation: true,
            devTools: isDev,
            defaultFontSize:12,
            preload: path.join(__dirname, 'preload.js'),
            webviewTag: true,
            additionalArguments: [ parent ? "--isModal=true" : "--isModal=false", 
                                    isDev ? "--isDev=true" : "--isDev=false"
            ]
        }
    });

    if (parent) {
        if (posX === -1 || posY === -1) {
            centerWithParent(parent, win);
        } else {
            win.setPosition(posX, posY, false);
        }
    } 

    win.webContents.setWindowOpenHandler(({ url }) => {
           
        const whitelist = [
            'https://github.com/O-Vault/O-Vault/',
            'https://www.o-vault.org/',
            'https://github.com/O-Vault/O-Vault/issues',
            'https://github.com/O-Vault/O-Vault/discussions',
            'https://github.com/O-Vault/O-Vault/security',
            'https://github.com/O-Vault/O-Vault/blob/main/LICENSE'
        ];

        if (whitelist.indexOf(url) >= 0) {
            shell.openExternal(url);
        }
        return { action: 'deny' };
        
    });

    //win.webContents.toggleDevTools();

    win.once('ready-to-show', () => {
        if (parent != null) {
            win.webContents.setZoomFactor(parent.webContents.getZoomFactor());
        }
       
        win.show();
    });

    return win;
};

const getParameterByName = (name: string, url: string) => {
    name = name.replace(/[[\]]/g, `\\$&`);
    const regex = new RegExp('[?&]' + name + `(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};


export const util = {
    createWindow: createWindow,
    loadRoute: loadRoute,
    getParameterByName: getParameterByName
};