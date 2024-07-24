import * as os from "os";
import * as fs from "fs";
import { ipcRenderer } from "electron";
import { Vault, VaultItem } from "./Vault";
import { aes } from "./encryption";
import { OpenDialogReturnValue, SaveDialogReturnValue } from "electron";
import { VaultEditModalResult } from "./VaultEditBrowserWindow";
import { VaultItemEditModalResult } from "./VaultItemEditBrowserWindow";
import { MessageBoxArgs, MessageBoxResult, MessageBoxReturnCode } from "./MessageBoxWindow";


const getAppVersion = () => {

    try {
        const path = __dirname + '/../package.json';
        const packageJson = fs.readFileSync(path, 'utf-8');
        const groups = /"version": "(.*)"/gm.exec(packageJson);
        if (groups && groups.length > 1) {
            return groups[1];
        } else {
            return 'unknown';
        }

    } catch (err) {
        return 'unknown';
    }

};

export const electronApi = {

    argv: window.process.argv,

    platform: os.platform(),

    nodeVersion: process.version,

    appVersion: getAppVersion(),

    openDevTools: (isModalWindow: boolean) => ipcRenderer.send('app:open-dev-tools', isModalWindow),

    appQuit: () => {

        ipcRenderer.send('app:quit');
    },

    appMinimize: () => {

        ipcRenderer.send('app:minimize');
    },

    appExit: () => {

        ipcRenderer.send('app:quit');
    },

    appSetAlwaysOnTop: (value: boolean) => {

        ipcRenderer.send('app:set-always-on-top', value);
    },

    appGetAlwaysOnTop: async (): Promise<boolean> => {

        return await ipcRenderer.invoke('app:get-always-on-top');
    },

    appRetrieveZoomFactor: async (): Promise<number> => {

        return await ipcRenderer.invoke('app:retrieve-zoom-factor');
    },

    vaultSelectFile: async (): Promise<OpenDialogReturnValue> => {

        return await ipcRenderer.invoke('vault:select-file');
    },

    vaultSaveFile: async (): Promise<SaveDialogReturnValue> => {

        return await ipcRenderer.invoke('vault:save-file');
    },

    appChangeZoomFactor: (value: number) => {

        ipcRenderer.send('app:change-zoom-factor', value);
    },

    getSessionKey: async (): Promise<string> => {

        return await ipcRenderer.invoke('app:get-session-key');
    },

    sendSessionKey: (sessionKey: string) => {

        if (ipcRenderer !== undefined) {
            return ipcRenderer.send('app:send-session-key', sessionKey);
        }
    },

    appReload: () => {

        ipcRenderer.send('app:reload');
    },

    openVaultEditModal: async (width: number, height: number, posX: number, posY: number): Promise<VaultEditModalResult> => {

        return await ipcRenderer.invoke('app:open-vault-edit-modal', width, height, posX, posY);
    },

    openVaultItemEditModal: async (item: VaultItem, width: number, height: number, posX: number, posY: number): Promise<VaultItemEditModalResult> => {

        return await ipcRenderer.invoke('app:open-vault-item-edit-modal', item, width, height, posX, posY);
    },

    openMessageBox: async (options: MessageBoxArgs, width: number = 400, height: number = 200): Promise<MessageBoxResult> => {

        return await ipcRenderer.invoke('app:open-message-box', options, width, height);
    },

    closeVaultEditModal: (vaultPath: string, encryptedPassword: Uint16Array) => {

        return ipcRenderer.send('app:close-vault-edit-modal', vaultPath, encryptedPassword);
    },

    closeVaultItemEditModal: (encryptedItem: Uint16Array) => {

        return ipcRenderer.send('app:close-vault-item-edit-modal', encryptedItem);
    },

    closeMessageBox: (returnCode: MessageBoxReturnCode) => {

        return ipcRenderer.send('app:close-message-box', returnCode);
    },

    openSettingsModal: async (width: number, height: number, posX: number, posY: number): Promise<void> => {

        return await ipcRenderer.invoke('app:open-settings-modal', width, height, posX, posY);
    },

    openAboutModal: async (width: number, height: number): Promise<void> => {

        return await ipcRenderer.invoke('app:open-about-modal', width, height, -1, -1);
    },

    getHomeFolder: async (): Promise<string> => {

        return await ipcRenderer.invoke('app:get-home-folder');
    },

    getPathSeparator: async (): Promise<string> => {

        return await ipcRenderer.invoke('app:get-path-separator');
    },

    loadVault: async (password: Uint16Array, sessionKey: string, path: string): Promise<Vault> => {

        const pwd: string = await aes.decrypt(password, sessionKey, false);
        const encrypted: Uint16Array = await ipcRenderer.invoke('vault:load', path);
        const result = await aes.decrypt(encrypted, pwd, true);
        const vault: Vault = JSON.parse(result);
        return vault;
    },

    loadSample: async (): Promise<Vault> => {

        return await ipcRenderer.invoke('vault:sample');
    },

    saveVault: async (vault: Vault, password: Uint16Array, sessionKey: string, path: string): Promise<void> => {

        const pwd: string = await aes.decrypt(password, sessionKey, false);
        const encrypted = await aes.encrypt(JSON.stringify(vault), pwd, true);
        return await ipcRenderer.invoke('vault:save', encrypted, path);
    },

    fileExists: async (filepath: string): Promise<boolean> => {

        return await ipcRenderer.invoke('app:file-exists', filepath);
    }
};