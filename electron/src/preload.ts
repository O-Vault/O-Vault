/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
  argv: window.process.argv,
  invoke: (channel:string, ...args: any[]) : Promise<any> => ipcRenderer.invoke(channel, ...args),
  send: (channel:string, ...args: any[]) : void => ipcRenderer.send(channel, ...args)
});
