import { app } from "electron";

const {env} = process; 
const isEnvSet = 'ELECTRON_IS_DEV' in env;
const getFromEnv = env.ELECTRON_IS_DEV === 'true';

export const isDev : boolean = isEnvSet ? getFromEnv : !app.isPackaged;

