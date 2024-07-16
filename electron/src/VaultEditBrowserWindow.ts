import { BrowserWindow } from "electron";

export interface VaultEditModalResult {
    vaultPath: string,
    encryptedPassword: Uint16Array
}
export class VaultEditBrowserWindow extends BrowserWindow {
    modalResult?: VaultEditModalResult;
}