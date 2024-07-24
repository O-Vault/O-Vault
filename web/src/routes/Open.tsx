import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/common/GlobalContext";

import { DECRYPTION_FAILED_ERROR, aes } from "o-vault-lib";
import { RouterContext } from "@/common/RouterContext";
import { Typography, Button, Input, IconButton } from "@mui/joy";
import { IconNext } from "@/icons/IconNext";
import { IconEye } from "@/icons/IconEye";
import { IconEyeOff } from "@/icons/IconEyeOff";
import { useTheme } from '@mui/joy/styles';
import { SessionKeyContext } from "@/common/SessionKeyContext";


export function Open() {

    const LAST_OPENED_VAULT = "last-opened-vault";
    
    const theme = useTheme();
    
    const { route, setRoute } = useContext(RouterContext);
    const { context, setContext } = useContext(GlobalContext);
    const sessionKey = useContext(SessionKeyContext);

    const [newVaultBtnDisabled, setNewVaultBtnDisabled] = useState(false);
    const [openVaultBtnDisabled, setOpenVaultBtnDisabled] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [path, setPath] = useState('');
    
    const passwordInput = useRef(null);

    const storePassword = async (pwd: string): Promise<Uint16Array> => {
        context.password = await aes.encrypt(pwd, sessionKey, false);
        setContext({ ...context });
        return context.password;
    };

    const visibilityChangeHandler = () => {
        if (!document.hidden && context.vaultPath) {
            setEnteredPassword('');
        }
    };

    const onFocusHandler = () => {
        if (passwordInput.current) {
            const input = passwordInput.current.querySelector('input');
            input.focus();
        }
    };

    const openVault = async (password: string, vaultPath: string): Promise<void> => {

        if (!password) {
            return;
        }
        const pwd = await storePassword(password);

        if (context.vaultLoaded === false) {
            window.electronAPI.loadVault(pwd, sessionKey, vaultPath).then((res) => {
                context.vault = res;
                context.vaultPath = vaultPath;
                context.vaultLoaded = true;
                setContext({ ...context });
                route.current = '/';
                setRoute({ ...route });
            }).catch((ex: Error) => {
                let errorMessage;
                if (ex.message === DECRYPTION_FAILED_ERROR) {
                    errorMessage = 'Incorrect password';
                } else {
                    errorMessage = 'Unknown error';
                }
                if (passwordInput.current) {
                    const input: HTMLInputElement = passwordInput.current.firstChild;
                    input.select();
                }

                setError(errorMessage);
            });

        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
        if (e.code === 'Enter') {
            openVault(enteredPassword, path);
            e.stopPropagation();
        }
    };

    const reset = () => {
        setPath('');
        context.vaultLoaded = false;
        context.vaultPath = '';
        setContext({ ...context });
    };

    const toggleVisibility = () => {
        const input = passwordInput.current.firstChild as HTMLInputElement;
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
        input.focus();
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
        autoHidePassword();
    };

    const openFile = (file: string) => {
        localStorage.setItem(LAST_OPENED_VAULT, file);
        setPath(file);
        context.vaultPath = file;
        setContext({ ...context });
        setError('');
        setEnteredPassword('');
        setInputType('password');
    };

    const newVault = async (): Promise<void> => {
        const posX = Number(localStorage.getItem('vaultedit-posx') || -1);
        const posY = Number(localStorage.getItem('vaultedit-posy') || -1);
        setNewVaultBtnDisabled(true);
        context.showWaitCursor = true;
        setContext({...context});
        const modalResult = await window.electronAPI.openVaultEditModal(500, 570, posX, posY);
        setNewVaultBtnDisabled(false);
        context.showWaitCursor = false;
        setContext({...context});
        if (modalResult !== undefined) {
            
            setLoading(true);
            openFile(modalResult.vaultPath);
            const password = await aes.decrypt(modalResult.encryptedPassword, sessionKey, false);
            openVault(password, modalResult.vaultPath);
        }

    };


    const openExistingVault = async (): Promise<void> => {

        setOpenVaultBtnDisabled(true);
        const result = await window.electronAPI.vaultSelectFile();
        setOpenVaultBtnDisabled(false);
        if (!result.canceled) {
            const file = result.filePaths[0];
            openFile(file);
        }
    };

    const autoHidePassword = () => {
        
        setTimeout(() => {
            setInputType('password');
        }, 10000);
    };

    useEffect(() => {
        if (localStorage.getItem(LAST_OPENED_VAULT)) {
            openFile(localStorage.getItem(LAST_OPENED_VAULT));
        }
        setLoaded(true);
        document.addEventListener('visibilitychange', visibilityChangeHandler, false);
        window.addEventListener('focus', onFocusHandler, false);
        return () => {
            document.removeEventListener('visibilitychange', visibilityChangeHandler, false);
            window.removeEventListener('focus', onFocusHandler, false);
        };
    }, []);

    useEffect(() => {

        if (route.args.length > 0 && route.args[0] === 'new-vault') {
            route.args = [];
            setRoute({ ...route });
            reset();
            newVault();
        } else if (route.args.length > 0 && route.args[0] === 'open-vault') {
            route.args = [];
            setRoute({ ...route });
            reset();
            openExistingVault();
        } 
    }, [route]);

    return (
        loaded && <div id="enter-password" className="h-full flex items-center  flex-col justify-center" >
       
            {path && <div className="text-left h-full w-full flex flex-col justify-center items-center"  >

                {!loading && <div style={{ width: '80%' }} className="grow flex flex-col justify-center h-full items-center">
                    <Input ref={passwordInput} className="w-full password" slotProps={{input: {spellCheck:false}}}
                        value={enteredPassword} type={inputType}
                        onKeyDown={(e) => onKeyDown(e)}
                        onChange={(e) => { setEnteredPassword(e.currentTarget.value); setError(''); }}
                        placeholder="Enter password"
                        autoFocus
                        endDecorator={
                            <div className="flex flex-row items-center" >
                                <div className="flex flex-row  my-2" style={{ borderRight: `solid 1px ${theme.vars.palette.divider}`, paddingRight: '10px' }}>
                                    <IconButton tabIndex={-1} onClick={toggleVisibility} title={inputType === 'password' ? 'Reveal the password' : 'Hide the password'}>
                                        {inputType === 'password' && <IconEye style={{ padding: 0, width: '18px' }} />}
                                        {inputType !== 'password' && <IconEyeOff style={{ padding: 0, width: '18px' }} />}
                                    </IconButton>
                                </div>
                                <div className="flex flex-row px-1" style={{}}>
                                    <IconButton tabIndex={-1} onClick={() => openVault(enteredPassword, path)} title="Unlock" >
                                        <IconNext style={{ width: '18px' }} />
                                    </IconButton>
                                </div>
                            </div>
                        }
                    />
                    <div className="pt-2" style={{ minHeight: '50px', visibility: `${error ? 'visible' : 'hidden'}` }}>
                        <Typography color="danger" >{error}</Typography>
                    </div>

                    <div className="text-center pt-5">
                        <Button size="sm" onClick={() => reset()} variant="soft" >CHANGE VAULT</Button>
                    </div>
                </div>}

                {loading && <div>LOADING...</div>}

            </div>}

            {!path && <div id="welcome"
                className="h-full w-full flex items-center flex-col justify-center text-center" style={{ width: '80%' }}>

                <Typography level="h2"  >
                    Welcome
                </Typography>
                <Typography className="py-10">
                    How would you like to start ?
                </Typography>
                <div className="my-3 text-center w-full" >
                    <Button color="primary" size="md" sx={{ width: '70%' }}
                        onClick={newVault} disabled={newVaultBtnDisabled}
                        variant="solid">NEW VAULT</Button>
                </div>
                <div className="my-3 text-center w-full">
                    <Button color="neutral" size="md" sx={{ width: '70%' }}
                        onClick={openExistingVault} disabled={openVaultBtnDisabled}
                        variant="solid">OPEN VAULT</Button>
                </div>
            </div>}
        </div>
    );
}