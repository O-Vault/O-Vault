/* eslint-disable no-unused-vars */
import { MessageBoxArgs, MessageBoxResult, MessageBoxReturnCode } from "@/routes/MessageBox";
import { VaultEditModalResult } from "@/routes/VaultEdit";
import { VaultItemEditModalResult } from "@/routes/VaultItemEdit";
import { Vault, VaultItem } from "./Vault";

interface OpenDialogReturnValue {

    canceled: boolean;
    filePaths: string[];
    bookmarks?: string[];
}

interface SaveDialogReturnValue {

    canceled: boolean;
    filePath: string;
    bookmark?: string;
}

export interface OVaultElectronAPI {
    argv: string[];
    platform: string;
    nodeVersion: string;
    appVersion: string;
    openDevTools: (isModalWindow: boolean) => void;
    appQuit: () => void;
    appMinimize: () => void;
    appExit: () => void;
    appSetAlwaysOnTop: (value: boolean) => void;
    appGetAlwaysOnTop: () => Promise<boolean>;
    appRetrieveZoomFactor: () => Promise<number>;
    vaultSelectFile: () => Promise<OpenDialogReturnValue>;
    vaultSaveFile: () => Promise<SaveDialogReturnValue>;
    appChangeZoomFactor: (value: number) => void;
    getSessionKey: () => Promise<string>;
    sendSessionKey: (sessionKey: string) => void;
    appReload: () => void;
    openVaultEditModal: (width: number, height: number, posX: number, posY: number) => Promise<VaultEditModalResult>;
    openVaultItemEditModal: (item: VaultItem, width: number, height: number, posX: number, posY: number) => Promise<VaultItemEditModalResult>
    openMessageBox: (options: MessageBoxArgs, width: number, height: number) => Promise<MessageBoxResult>;
    closeVaultEditModal: (vaultPath: string, encryptedPassword: Uint16Array) => void;
    closeVaultItemEditModal: (encryptedItem: Uint16Array) => void;
    closeMessageBox: (returnCode: MessageBoxReturnCode) => void;
    openSettingsModal: (width: number, height: number, posX: number, posY: number) => Promise<void>;
    openAboutModal: (width: number, height: number) => Promise<void>;
    getHomeFolder: () => Promise<string>;
    getPathSeparator: () => Promise<string>;
    loadVault: (password: Uint16Array, sessionKey: string, path: string) => Promise<Vault>;
    loadSample: () => Promise<Vault>;
    saveVault: (vault: Vault, password: Uint16Array, sessionKey: string, path: string) => Promise<void>;
    fileExists: (filepath: string) => Promise<boolean>;
}