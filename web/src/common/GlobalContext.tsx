import { createContext, Dispatch } from 'react';
import { Vault } from './Vault';

export class AppContext {

    constructor() {
        this.vault = new Vault();
        this.vaultLoaded = false;
    }
    vault: Vault;
    vaultLoaded: boolean;
    vaultPath: string;
    password: Uint16Array;
    showWaitCursor: boolean;
}

export class AppContextContainer {
    constructor() {
        this.context = new AppContext();
    }
    context: AppContext;
    setContext: Dispatch<React.SetStateAction<AppContext>>;
}

export const GlobalContext = createContext<AppContextContainer>(new AppContextContainer());