/* eslint-disable @typescript-eslint/no-explicit-any */
import {  contextBridge } from "electron";
import { electronApi } from "./electronAPI";

contextBridge.exposeInMainWorld('electronAPI', electronApi);
