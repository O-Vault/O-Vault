/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer, contextBridge } from "electron";
import * as os from "os";

contextBridge.exposeInMainWorld('electronAPI', {
  argv: window.process.argv,
  platform: os.platform(),
  invoke: (channel:string, ...args: any[]) : Promise<any> => ipcRenderer.invoke(channel, ...args),
  send: (channel:string, ...args: any[]) : void => ipcRenderer.send(channel, ...args)
});
