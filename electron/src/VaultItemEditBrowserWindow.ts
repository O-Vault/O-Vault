import { BrowserWindow } from "electron";

export interface VaultItemEditModalResult {
    encryptedItem: Uint16Array
}
export class VaultItemEditBrowserWindow extends BrowserWindow {
    modalResult?: VaultItemEditModalResult;
}