
declare interface Window {
    electronAPI: import ("@/common/electronAPI").OVaultElectronAPI
    loadingStarted : boolean,
    initialRoute: string,
    isModalWindow: boolean,
    isMainWindow: boolean,
    isDev: boolean,
    modalArgs: object
}
  
