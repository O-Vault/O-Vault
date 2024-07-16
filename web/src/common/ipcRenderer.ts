
import { Vault, VaultItem } from "./Vault";
import { aes } from "o-vault-lib";
import { OpenDialogReturnValue, SaveDialogReturnValue } from "electron";
import { VaultEditModalResult } from "@/routes/VaultEdit";
import { MessageBoxArgs, MessageBoxResult, MessageBoxReturnCode } from "@/routes/MessageBox";
import { VaultItemEditModalResult } from "@/routes/VaultItemEdit";

const appQuit = (): void => {

    window.electronAPI.send('app:quit');
};

const appMinimize = (): void => {

    window.electronAPI.send('app:minimize');
};

const appExit = (): void => {

    window.electronAPI.send('app:quit');
};

const appDevTools = (): void => {

    window.electronAPI.send('app:open-dev-tools', window.isModalWindow);
};

const appSetAlwaysOnTop = (value: boolean): void => {

    window.electronAPI.send('app:set-always-on-top', value);
};

const appGetAlwaysOnTop = async (): Promise<boolean> => {

    return await window.electronAPI.invoke('app:get-always-on-top');
};

const appRetrieveZoomFactor = async (): Promise<number> => {

    return await window.electronAPI.invoke('app:retrieve-zoom-factor');
};


const vaultSelectFile = async (): Promise<OpenDialogReturnValue> => {

    return await window.electronAPI.invoke('vault:select-file');
};

const vaultSaveFile = async (): Promise<SaveDialogReturnValue> => {

    return await window.electronAPI.invoke('vault:save-file');
};

const appChangeZoomFactor = (value: number): void => {

    window.electronAPI.send('app:change-zoom-factor', value);
};

const getSessionKey = async (): Promise<string> => {

    return await window.electronAPI.invoke('app:get-session-key');
};

const sendSessionKey = (sessionKey: string): void => {

    if (window.electronAPI !== undefined) {
        return window.electronAPI.send('app:send-session-key', sessionKey);
    }
};

const appReload = (): void => {

    window.electronAPI.send('app:reload');
};

const openVaultEditModal = async (width: number, height: number, posX: number, posY: number): Promise<VaultEditModalResult> => {

    return await window.electronAPI.invoke('app:open-vault-edit-modal', width, height, posX, posY);
};

const openVaultItemEditModal = async (item: VaultItem, width: number, height: number, posX: number, posY: number): Promise<VaultItemEditModalResult> => {

    return await window.electronAPI.invoke('app:open-vault-item-edit-modal', item, width, height, posX, posY);
};

const openMessageBox = async (options: MessageBoxArgs, width: number = 400, height: number = 200): Promise<MessageBoxResult> => {

    return await window.electronAPI.invoke('app:open-message-box', options, width, height);
};

const closeVaultEditModal = (vaultPath: string, encryptedPassword: Uint16Array): void => {

    return window.electronAPI.send('app:close-vault-edit-modal', vaultPath, encryptedPassword);
};

const closeVaultItemEditModal = (encryptedItem: Uint16Array): void => {

    return window.electronAPI.send('app:close-vault-item-edit-modal', encryptedItem);
};

const closeMessageBox = (returnCode: MessageBoxReturnCode): void => {

    return window.electronAPI.send('app:close-message-box', returnCode);
};

const openSettingsModal = async (width: number, height: number, posX: number, posY: number): Promise<void> => {

    return await window.electronAPI.invoke('app:open-settings-modal', width, height, posX, posY);
};

const getHomeFolder = async (): Promise<string> => {

    return await window.electronAPI.invoke('app:get-home-folder');
};

const getPathSeparator = async (): Promise<string> => {

    return await window.electronAPI.invoke('app:get-path-separator');
};

const loadVault = async (password: Uint16Array, sessionKey: string, path: string): Promise<Vault> => {

    const pwd: string = await aes.decrypt(password, sessionKey, false);
    const encrypted: Uint16Array = await window.electronAPI.invoke('vault:load', path);
    const result = await aes.decrypt(encrypted, pwd, true);
    const vault: Vault = JSON.parse(result);
    return vault;
};

const loadSample = async (): Promise<Vault> => {

    return await window.electronAPI.invoke('vault:sample');
};

const saveVault = async (vault: Vault, password: Uint16Array, sessionKey: string, path: string): Promise<void> => {

    const pwd: string = await aes.decrypt(password, sessionKey, false);
    const encrypted = await aes.encrypt(JSON.stringify(vault), pwd, true);
    return await window.electronAPI.invoke('vault:save', encrypted, path);
};

const fileExists = async (filepath: string): Promise<boolean> => {

    return await window.electronAPI.invoke('app:file-exists', filepath);
};

export const ipcRenderer = {
    appQuit: appQuit,
    appMinimize: appMinimize,
    appExit: appExit,
    appDevTools: appDevTools,
    appSetAlwaysOnTop: appSetAlwaysOnTop,
    appGetAlwaysOnTop: appGetAlwaysOnTop,
    appRetrieveZoomFactor: appRetrieveZoomFactor,
    appChangeZoomFactor: appChangeZoomFactor,
    loadVault: loadVault,
    saveVault: saveVault,
    loadSample: loadSample,
    appReload: appReload,
    vaultSelectFile: vaultSelectFile,
    vaultSaveFile: vaultSaveFile,
    openVaultEditModal: openVaultEditModal,
    closeVaultEditModal: closeVaultEditModal,
    openSettingsModal: openSettingsModal,
    getSessionKey: getSessionKey,
    sendSessionKey: sendSessionKey,
    getHomeFolder: getHomeFolder,
    getPathSeparator: getPathSeparator,
    fileExists: fileExists,
    openMessageBox: openMessageBox,
    closeMessageBox: closeMessageBox,
    openVaultItemEditModal: openVaultItemEditModal,
    closeVaultItemEditModal: closeVaultItemEditModal
};

