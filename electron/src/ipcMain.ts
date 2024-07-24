import { ipcMain, BrowserWindow, App, dialog, OpenDialogReturnValue, SaveDialogReturnValue, IpcMainInvokeEvent } from "electron";
import * as fs from "fs";
import { util } from "./util";
import { VaultEditBrowserWindow, VaultEditModalResult } from "./VaultEditBrowserWindow";
import * as path from "path";
import { MessageBoxArgs, MessageBoxResult, MessageBoxReturnCode, MessageBoxWindow } from "./MessageBoxWindow";
import { VaultItemEditBrowserWindow, VaultItemEditModalResult } from "./VaultItemEditBrowserWindow";
import { isDev } from "./electronIsDev";
import { VaultItem } from "./Vault";


export let SESSION_KEY: string = null;

export const registerIpcEvents = (app: App): void => {

    const getMainWindow = () => {
        return BrowserWindow.getAllWindows().filter(w => {
            return w.getParentWindow() === null;
        })[0];
    };

    const getModalWindow = (): BrowserWindow => {
        return BrowserWindow.getAllWindows().filter(w => {
            return w.isModal() === true;
        })[0];
    };

    ipcMain.on('app:quit', (): void => {

        app.quit();

    });

    ipcMain.on('app:reload', (): void => {

        getMainWindow().webContents.reloadIgnoringCache();

    });

    ipcMain.handle('app:get-session-key', (): Promise<string> => {

        return new Promise((resolve) => {
            resolve(SESSION_KEY);
        });
    });

    ipcMain.on('app:send-session-key', (_e: IpcMainInvokeEvent, sessionKey: string): void => {

        SESSION_KEY = sessionKey;
    });

    ipcMain.handle('app:get-home-folder', (): Promise<string> => {

        return new Promise((resolve) => {
            resolve(app.getPath('home'));
        });

    });

    ipcMain.handle('app:get-path-separator', () => {

        return new Promise((resolve) => {
            resolve(path.sep);
        });

    });

    ipcMain.on('app:minimize', (): void => {

        BrowserWindow.getAllWindows().forEach(win => win.minimize());
    });

    ipcMain.handle('app:file-exists', (_e: IpcMainInvokeEvent, filepath: string): boolean => {

        return fs.existsSync(filepath);
    });

    ipcMain.handle('app:open-vault-edit-modal', async (_e: IpcMainInvokeEvent, width: number, height: number,
        posX: number, posY: number): Promise<VaultEditModalResult> => {

        return await new Promise<VaultEditModalResult>((resolve) => {

            const parent = getMainWindow();
            const win = util.createWindow(width, height, posX, posY, parent) as VaultEditBrowserWindow;
            util.loadRoute(win, '/vault/new');
            win.once('close', () => {
                resolve(win.modalResult);
            });
        });

    });

    ipcMain.handle('app:open-vault-item-edit-modal', async (_e: IpcMainInvokeEvent, item: VaultItem, width: number, height: number,
        posX: number, posY: number): Promise<VaultItemEditModalResult> => {

        return await new Promise<VaultItemEditModalResult>((resolve) => {

            const parent = getMainWindow();
            const win = util.createWindow(width, height, posX, posY, parent) as VaultItemEditBrowserWindow;
            const url = '/vault/item/edit';
            if (item) {
                util.loadRoute(win, url, item);
            } else {
                util.loadRoute(win, url);
            }

            win.once('close', () => {
                resolve(win.modalResult);
            });
        });

    });

    ipcMain.handle('app:open-message-box', async (_e: IpcMainInvokeEvent, options: MessageBoxArgs, width: number, height: number): Promise<MessageBoxResult> => {

        return await new Promise<MessageBoxResult>((resolve) => {

            const parent = getMainWindow();
            const win = util.createWindow(width, height, -1, -1, parent) as MessageBoxWindow;
            util.loadRoute(win, '/msgbox', options);
            win.once('close', () => {
                resolve(win.modalResult);
            });
        });

    });

    ipcMain.handle('app:open-settings-modal', async (_e: IpcMainInvokeEvent, width: number, height: number,
        posX: number, posY: number): Promise<void> => {

        return await new Promise((resolve) => {
            const parent = getMainWindow();
            const win = util.createWindow(width, height, posX, posY, parent);
            util.loadRoute(win, '/settings');
            win.once('close', () => {
                resolve();
            });
        });

    });

    ipcMain.handle('app:open-about-modal', async (_e: IpcMainInvokeEvent, width: number, height: number,
        posX: number, posY: number): Promise<void> => {

        return await new Promise((resolve) => {
            const parent = getMainWindow();
            const win = util.createWindow(width, height, posX, posY, parent);
            util.loadRoute(win, '/about');
            win.once('close', () => {
                resolve();
            });
        });

    });

    ipcMain.on('app:close-vault-edit-modal', (_e: IpcMainInvokeEvent, vaultPath: string, encryptedPassword: Uint16Array): void => {

        (getModalWindow() as VaultEditBrowserWindow).modalResult = {
            vaultPath: vaultPath,
            encryptedPassword: encryptedPassword
        };
        getModalWindow().close();
    });

    ipcMain.on('app:close-vault-item-edit-modal', (_e: IpcMainInvokeEvent, encryptedItem: Uint16Array): void => {

        (getModalWindow() as VaultItemEditBrowserWindow).modalResult = {
            encryptedItem: encryptedItem
        };
        getModalWindow().close();
    });

    ipcMain.on('app:close-message-box', (_e: IpcMainInvokeEvent, returnCode: MessageBoxReturnCode): void => {

        (getModalWindow() as MessageBoxWindow).modalResult = {
            returnCode: returnCode
        };
        getModalWindow().close();
    });

    ipcMain.on('app:open-dev-tools', (_e: IpcMainInvokeEvent, isModalWindow: boolean): void => {

        if (!isDev) {
            return;
        }
        if (isModalWindow) {
            getModalWindow().webContents.openDevTools();
        } else {
            getMainWindow().webContents.openDevTools();
        }

    });

    ipcMain.on('app:change-zoom-factor', (_e: IpcMainInvokeEvent, factor: number): void => {

        BrowserWindow.getAllWindows().forEach(w => w.webContents.setZoomFactor(factor));
    });

    ipcMain.handle('app:retrieve-zoom-factor', (): number => {

        return getMainWindow().webContents.getZoomFactor();

    });

    ipcMain.on('app:set-always-on-top', (_e: IpcMainInvokeEvent, value: boolean): void => {

        getMainWindow().setAlwaysOnTop(value);
    });

    ipcMain.handle('app:get-always-on-top', (): Promise<boolean> => {

        return new Promise((resolve) => {

            resolve(getMainWindow().isAlwaysOnTop());
        });
    });

    ipcMain.handle('vault:load', (_e: IpcMainInvokeEvent, path: string): Uint16Array => {

        const buffer = fs.readFileSync(path);
        const encrypted = new Uint16Array(buffer.buffer, buffer.byteOffset, buffer.length / 2);
        return encrypted;
    });

    ipcMain.handle('vault:save', (_e: IpcMainInvokeEvent, encryptedVault: Uint16Array, path: string): void => {

        fs.writeFileSync(path, Buffer.from(encryptedVault.buffer), 'utf-16le');
    });

    ipcMain.handle('vault:select-file', async (): Promise<OpenDialogReturnValue> => {

        return await dialog.showOpenDialog({
            defaultPath: app.getPath('home'),
            properties: ['openFile']
        });
    });

    ipcMain.handle('vault:save-file', async (): Promise<SaveDialogReturnValue> => {

        return await dialog.showSaveDialog({
            defaultPath: app.getPath('home'),
            title: 'Vault destination',
            filters: [
                { name: 'Vaults', extensions: ['vlx'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        });
    });

};
