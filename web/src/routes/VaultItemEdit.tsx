import { ipcRenderer } from "@/common/ipcRenderer";
import { CURRENT_PALETTE, Palettes } from "@/common/Palettes";
import { SessionKeyContext } from "@/common/SessionKeyContext";
import { VaultItem } from "@/common/Vault";
import { BadgeLetter } from "@/components/BadgeLetter";
import { PageHeader } from "@/components/PageHeader";
import { PasswordStrength } from "@/components/PasswordStrength";
import { IconContextMenu } from "@/icons/IconContextMenu";
import { IconEye } from "@/icons/IconEye";
import { IconEyeOff } from "@/icons/IconEyeOff";
import { Button, Dropdown, FormControl, FormHelperText, FormLabel, IconButton, Input, Menu, MenuButton, MenuItem, Stack, useTheme } from "@mui/joy";
import { aes, isValidPasswordResult, passwordUtil } from "o-vault-lib";
import { useRef, useState, useContext, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';

export interface VaultItemEditModalResult {

    encryptedItem: Uint16Array
}

export function VaultItemEdit() {

    const MIN_CHARS_PASSWORD = 6;

    const theme = useTheme();

    const inputItem: VaultItem = window.modalArgs as VaultItem;
    const isNew = inputItem === undefined || inputItem.id === undefined;
    const sessionKey = useContext(SessionKeyContext);

    const [validationStarted, setValidationStarted] = useState<boolean>(false);
    const [displayType, setDisplayType] = useState(localStorage.getItem('display'));
    const [entryName, setEntryName] = useState('');
    const [entryNameError, setEntryNameError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [url, setUrl] = useState('');
    const [urlError, setUrlError] = useState('');
    const [inputTypePassword, setInputTypePassword] = useState('password');
    const [score, setScore] = useState(0);

    const refInputPassword = useRef<HTMLDivElement>(null);

    if (!isNew) {
        console.log(inputItem);
    }
    const cancel = () => {

        if (window.isModalWindow) {
            localStorage.setItem('vaultitemedit-posx', window.screenX.toString());
            localStorage.setItem('vaultitemedit-posy', window.screenY.toString());
        }
        window.close();
    };

    const storageEventHandler = () => {
        setDisplayType(localStorage.getItem('display'));
    };

    const getErrorMessage = (err: isValidPasswordResult) => {

        if (err === 'contains-invalid-character') {
            return 'The password contains an invalid character';
        } else if (err === 'not-enough-characters') {
            const expected = MIN_CHARS_PASSWORD;
            const missing = expected - password.length;
            return `The password should contain at least ${expected} characters (${missing} more needed)`;
        } else if (err === 'password-too-long') {
            return `The password is too long (max 128)`;
        } else {
            throw new Error('not an error');
        }
    };

    const isValidUrl = (url: string) => {

        return url.match(/[a-z]+:\/\//g) || url.startsWith('www.');
    };

    const validate = (bypassValidationStarted: boolean = false): boolean => {

        if (!bypassValidationStarted && !validationStarted) {
            return false;
        }
        let result = true;

        if (entryName.length === 0) {
            setEntryNameError('Required');
            result = false;
        } else {
            setEntryNameError('');
        }

        if (password.length === 0) {
            setPasswordError('Required');
            result = false;
        } else if (passwordUtil.isValidPassword(password, MIN_CHARS_PASSWORD) !== 'valid') {
            setPasswordError(getErrorMessage(passwordUtil.isValidPassword(password, MIN_CHARS_PASSWORD)));
            result = false;
        } else {
            setPasswordError('');
        }

        if (url.length > 0 && !isValidUrl(url)) {
            setUrlError('Invalid url');
            result = false;
        } else {
            setUrlError('');
        }

        return result;
    };

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            cancel();
        }
    };

    useEffect(() => {

        validate();

    }, [entryName, username, password, validationStarted, url]);


    useEffect(() => {

        if (isNew) {
            if (inputItem.name) {
                setEntryName(inputItem.name);
            }
        } else {
            setEntryName(inputItem.name);
            setUsername(inputItem.username);
            setPassword(inputItem.password);
            setUrl(inputItem.url);
            updatePasswordStrength(inputItem.password);
        }
        document.addEventListener('keydown', onKeyDown, false);
        window.addEventListener('storage', storageEventHandler, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
            window.removeEventListener('storage', storageEventHandler, false);
        };
    }, []);

    const onCreate = async () => {

        setValidationStarted(true);

        if (!await validate(true)) {
            return;
        }

        localStorage.setItem('vaultitemedit-posx', window.screenX.toString());
        localStorage.setItem('vaultitemedit-posy', window.screenY.toString());
        const item = new VaultItem();
        item.id = crypto.randomUUID();
        item.name = entryName;
        item.username = username;
        item.password = password;
        item.url = url;
        const encryptedItem = await aes.encrypt(JSON.stringify(item), sessionKey, false);
        ipcRenderer.closeVaultItemEditModal(encryptedItem);
    };

    const toggleVisibilityPassword = () => {

        const input = refInputPassword.current.firstChild as HTMLInputElement;
        if (inputTypePassword === 'password') {
            setInputTypePassword('text');
        } else {
            setInputTypePassword('password');
        }
        input.focus();
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
    };

    const onBlurInputPassword = () => {

        setTimeout(() => {
            const input = refInputPassword.current.firstChild as HTMLInputElement;
            if (document.activeElement !== input) {
                setInputTypePassword('password');
            }
        }, 30000);
    };

    const generatePassword = () => {

        const password = passwordUtil.generatePassword(20);
        setPassword(password);
        updatePasswordStrength(password);
    };

    const menuItemStyling = {
        outline: 'none!important',
        ':active': {
            background: 'transparent!important'
        },
        ':focus': {
            background: `${theme.palette.background.winbar}!important`
        }
    };

    const getItemColor = (name:string): string => {

        if (!name) {
            return theme.palette.divider;
        }
        const colors: string[] = Palettes[CURRENT_PALETTE];
        const colorIndex = (name.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)) % colors.length;
        return colors[colorIndex];
    };

    const updatePasswordStrength = (newPassword: string) => {

        setScore(passwordUtil.calculatePasswordStrength(newPassword, false));
    };

    const updatePasswordStrengthWithDebounce = useDebouncedCallback(updatePasswordStrength, 300);

    return (
        <div className="grow flex flex-col  h-full w-full items-center px-5 ">

            <div className="flex flex-col h-full w-full">
                <PageHeader displayBackButton={false} className="py-4">Add New Entry</PageHeader>

                <div className="px-2 grow overflow-y-auto overflow-x-hidden custom-scrollbar ">


                    <FormControl className="pt-2" error={entryNameError.length > 0}>
                        <FormLabel>Entry Name</FormLabel>
                        <div className="flex flex-row w-full items-center">
                            <Input className="grow" value={entryName} slotProps={{ input: { spellCheck: false } }}
                                onChange={(e) => setEntryName(e.target.value)} autoFocus={true} />
                            {displayType === 'normal' && <BadgeLetter itemName={entryName} className="mx-2" />}
                            {displayType === 'compact' && <div>
                                <div className="mx-2" style={{ borderRadius:'1px', backgroundColor: getItemColor(entryName), width: '30px', height: '30px' }} >
                                    &nbsp;
                                </div>
                            </div>}
                        </div>
                        <FormHelperText sx={{ marginTop: 0, visibility: entryNameError.length > 0 ? 'visible' : 'hidden' }}>
                            {entryNameError}&nbsp;
                        </FormHelperText>
                    </FormControl>


                    <FormControl className="pt-2" >
                        <FormLabel>Username (optional)</FormLabel>
                        <Input value={username} onChange={(e) => setUsername(e.target.value)}
                            slotProps={{ input: { spellCheck: false } }} />
                        <FormHelperText sx={{ marginTop: 0, visibility: 'hidden' }}>
                            &nbsp;
                        </FormHelperText>
                    </FormControl>

                    <FormControl className="pt-4" error={passwordError.length > 0}>
                        <FormLabel>Password</FormLabel>
                        <Input type={inputTypePassword} placeholder="Enter the password" value={password}
                            slotProps={{ input: { spellCheck: false } }}
                            ref={refInputPassword}
                            onBlur={onBlurInputPassword}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if (e.code === 'Space') { e.preventDefault(); } }}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                updatePasswordStrengthWithDebounce(e.target.value);
                            }}
                            className="password"
                            endDecorator={
                                <div className="flex flex-row items-center" >
                                    <div className="flex flex-row  my-2" >
                                        <IconButton tabIndex={-1} onClick={toggleVisibilityPassword} title={inputTypePassword === 'password' ? 'Reveal the password' : 'Hide the password'}>
                                            {inputTypePassword === 'password' && <IconEye style={{ padding: 0, width: '18px' }} />}
                                            {inputTypePassword !== 'password' && <IconEyeOff style={{ padding: 0, width: '18px' }} />}
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row px-1" style={{
                                        borderLeft: `solid 1px ${theme.vars.palette.divider}`, marginLeft: '10px'
                                    }}>
                                        <Dropdown>
                                            <MenuButton variant="plain" className="context-menu " sx={{
                                                outline: 'none!important',
                                                padding: '4px'
                                            }}
                                                size="sm" tabIndex={-1}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <IconContextMenu style={{ width: '18px' }} />
                                            </MenuButton>
                                            <Menu placement="bottom-end">
                                                <MenuItem className="menuitem" sx={menuItemStyling} onClick={generatePassword} >Generate</MenuItem>
                                            </Menu>
                                        </Dropdown>

                                    </div>
                                </div>
                            } />
                        <FormHelperText sx={{ marginTop: 0, visibility: passwordError.length > 0 ? 'visible' : 'hidden' }}>
                            {passwordError}&nbsp;
                        </FormHelperText>
                    </FormControl>
                    <PasswordStrength className="my-2 mx-10" score={score} nbOfChars={password.length}></PasswordStrength>

                    <FormControl className="pt-2" error={urlError.length > 0}>
                        <FormLabel>URL (optional)</FormLabel>
                        <Input value={url} onChange={(e) => setUrl(e.target.value)} slotProps={{ input: { spellCheck: false } }} />
                        <FormHelperText sx={{ marginTop: 0, visibility: urlError.length > 0 ? 'visible' : 'hidden' }}>
                            {urlError}&nbsp;
                        </FormHelperText>
                    </FormControl>

                </div>
                <Stack direction="row" spacing={2} justifyContent="center" className="pt-4 pb-2"
                    alignItems="stretch">
                    <Button color="neutral" size="lg" variant="solid" onClick={cancel} >CANCEL</Button>
                    <Button color="primary" size="lg" variant="solid" onClick={onCreate}>{isNew ? 'CREATE' : 'SAVE'}</Button>
                </Stack>
            </div>
        </div>
    );
}