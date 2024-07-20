/* eslint-disable no-unused-vars */

interface OVaultIpcRenderer extends Electron.IpcRenderer {
    argv: string[];
    platform: string;
}
declare interface Window {
    electronAPI: OVaultIpcRenderer
    loadingStarted : boolean,
    initialRoute: string,
    isModalWindow: boolean,
    isMainWindow: boolean,
    isDev: boolean,
    modalArgs: object
}
  
