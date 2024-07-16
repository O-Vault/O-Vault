
import { StrictMode, useEffect, useState } from "react";
import { WinBar } from "@/components/WinBar";

import { AppContext } from "@/common/GlobalContext";
import { GlobalContext } from "@/common/GlobalContext";
import { ipcRenderer } from "@/common/ipcRenderer";
import { Route, RouterContext } from '@/common/RouterContext';
import { CssVarsProvider, CssBaseline } from '@mui/joy';
import { SessionKeyContext } from '@/common/SessionKeyContext';
import { WinBottom } from '@/components/WinBottom';

import { themeDefinition } from '@/common/theme';
import { passwordUtil } from 'o-vault-lib'; 
import { WinBarModal } from '@/components/WinBarModal';
import { WinBody } from './WinBody';

export  function App() {

    const [context, setContext] = useState<AppContext>(new AppContext());
    
    const [route, setRoute] = useState<Route>(new Route());
    const [loading, setLoading] = useState(true);
    
    const [sessionKey, setSessionKey] = useState('');
    const [isRunningOutsideElectron, setIsRunningOutsideElectron] = useState(false);

    const handleKeyup = (e: KeyboardEvent) => {

        if (e.code == 'F12' && window.isDev) {
           
            ipcRenderer.appDevTools();
        }
    };

    const isModalWindow = () => {
        if (window.electronAPI === undefined) {
            return false;
        } else {
            return window.electronAPI.argv.filter((curr)=>curr.startsWith('--isModal='))[0] === '--isModal=true';
        }
    };

    const isDev = () => {
        if (window.electronAPI === undefined) {
            return false;
        } else {
            return window.electronAPI.argv.filter((curr)=>curr.startsWith('--isDev='))[0] === '--isDev=true';
        }
    };

    const handleInitialRedirect = (): void  => {
             
        window.initialRoute = getParameterByName('route');
        window.isModalWindow = isModalWindow();
        window.isMainWindow = !window.isModalWindow;
        window.isDev = isDev();
        const modalArgs = getParameterByName('modalArgs');
        if (modalArgs) {
            window.modalArgs = JSON.parse(atob(modalArgs));
        }
        if (window.initialRoute && window.initialRoute !== route.current) {
            route.current = window.initialRoute;
            setRoute({...route});
        }
        
    };

    const getParameterByName = (name:string, url = window.location.href) => {
        
        const regex = new RegExp('[?&]' + name + `(=([^&#]*)|&|#|$)`),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
      };

    const handleUseEffect = async () => {
        
        handleInitialRedirect();
        let sessionKey : string;
        if (window.isMainWindow) {
            sessionKey = passwordUtil.generatePassword(16);
            await ipcRenderer.sendSessionKey(sessionKey);
        } else {
            sessionKey = await ipcRenderer.getSessionKey();
        }
        setSessionKey(sessionKey);
        setLoading(false);
        setIsRunningOutsideElectron(window.electronAPI === undefined);
        window.addEventListener('keyup', handleKeyup, false);
    };

    useEffect(() => {
    
        handleUseEffect();
        return () => {
            window.removeEventListener('keyup', handleKeyup, false);
        };
    }, []);

    return (
        <StrictMode>
            <CssVarsProvider theme={themeDefinition} defaultMode="dark">
                <RouterContext.Provider value={{ route, setRoute }}>
                    <SessionKeyContext.Provider value={sessionKey}>
                        <GlobalContext.Provider value={{ context, setContext }}>
                            <CssBaseline /> 

                            {!loading  && !isRunningOutsideElectron && <div id="main"

                                className={`select-none h-full w-full grow flex flex-col ${context.showWaitCursor ? 'wait-cursor': ''}`} >
                                {window.isModalWindow && <WinBarModal/> } 
                                {window.isMainWindow && <WinBar /> } 
                                <WinBody />
                                <WinBottom />
                            </div>}
                            {isRunningOutsideElectron && <div className="py-10 px-4 text-left w-full" >
                                Error: cannot be opened in the browser, please open through electron
                            </div>
                            }
                        </GlobalContext.Provider>
                    </SessionKeyContext.Provider>
                </RouterContext.Provider>
            </CssVarsProvider>
        </StrictMode>
    );
}


