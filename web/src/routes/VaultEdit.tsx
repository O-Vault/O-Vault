
import { aes } from "o-vault-lib";
import { SessionKeyContext } from "@/common/SessionKeyContext";
import { passwordUtil, isValidPasswordResult } from "o-vault-lib";
import { Vault } from "@/common/Vault";
import { ipcRenderer } from "@/common/ipcRenderer";
import { PageHeader } from "@/components/PageHeader";
import { ProtectionType, ProtectionTypeSelector } from "@/components/ProtectionTypeSelector";
import { SnackBar, SnackBarState } from "@/components/SnackBar";
import { IconClear } from "@/icons/IconClear";
import { IconContextMenu } from "@/icons/IconContextMenu";
import { IconEye } from "@/icons/IconEye";
import { IconEyeOff } from "@/icons/IconEyeOff";
import { IconFolder } from "@/icons/IconFolder";
import { Button, Dropdown, FormControl, FormHelperText, FormLabel, IconButton, Input, 
    Menu, MenuButton, MenuItem, Stack, useTheme } from "@mui/joy";
import { KeyboardEvent, SyntheticEvent, useContext, useEffect, useRef, useState } from "react";
import { PasswordStrength } from "@/components/PasswordStrength";
import { useDebouncedCallback } from 'use-debounce';

export interface VaultEditModalResult {
    vaultPath: string,
    encryptedPassword: Uint16Array
}

export function VaultEdit() {

    const ALLOW_PASTE_IN_PASSPHRASE2 = window.isDev;
    const MIN_CHARS_PASSWORD = 6;
    const MIN_CHARS_PASSPHRASE = 20;
    const MIN_WORDS_PASSPHRASE = 4;
    const MIN_CHARS_WORDS_PASSPHRASE = 4;

    const theme = useTheme();

    const sessionKey = useContext(SessionKeyContext);

    const [protectionType, setProtectionType] = useState<ProtectionType>('passphrase');
    const [name, setName] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [filePath, setFilePath] = useState<string>('');
    const [filePathError, setFilePathError] = useState<string>('');
    const [passphrase1, setPassphrase1] = useState<string>('');
    const [passphrase1Error, setPassphrase1Error] = useState<string>('');
    const [passphrase2, setPassphrase2] = useState<string>('');
    const [passphrase2Error, setPassphrase2Error] = useState<string>('');
    const [inputTypePassphrase1, setInputTypePassphrase1] = useState<string>('password');
    const [inputTypePassphrase2, setInputTypePassphrase2] = useState<string>('password');
    const [validationStarted, setValidationStarted] = useState<boolean>(false);
    const [fileSelectorBtnDisabled, setFileSelectorBtnDisabled] = useState<boolean>(false);
    const [snackBar, setSnackBar] = useState<SnackBarState>({ open: false, message: '' });
    const [score, setScore] = useState<number>(0);

    const refInputPassphrase1 = useRef<HTMLDivElement>(null);
    const refInputPassphrase2 = useRef<HTMLDivElement>(null);

    useEffect(() => {

        validate();

    }, [name, filePath, passphrase1, passphrase2, validationStarted, protectionType]);



    const cancel = () => {

        localStorage.setItem('vaultedit-posx', window.screenX.toString());
        localStorage.setItem('vaultedit-posy', window.screenY.toString());
        window.close();
    };

    const onOpenFilePath = async () => {

        setFileSelectorBtnDisabled(true);
        const result = await ipcRenderer.vaultSaveFile();
        setFileSelectorBtnDisabled(false);
        if (!result.canceled) {
            const filePath: string = result.filePath;
            setFilePath(filePath);
        }
    };

    const toggleVisibilityPassphrase1 = () => {
        const input = refInputPassphrase1.current.firstChild as HTMLInputElement;
        if (inputTypePassphrase1 === 'password') {
            setInputTypePassphrase1('text');
        } else {
            setInputTypePassphrase1('password');
        }
        input.focus();
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
    };

    const toggleVisibilityPassphrase2 = () => {
        const input = refInputPassphrase2.current.firstChild as HTMLInputElement;
        if (inputTypePassphrase2 === 'password') {
            setInputTypePassphrase2('text');
        } else {
            setInputTypePassphrase2('password');
        }
        input.focus();
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
    };

    const getErrorMessage = (err: isValidPasswordResult) => {

        if (err === 'contains-invalid-character') {
            return 'The password contains an invalid character';
        } else if (err === 'only-one-word-separator-expected') {
            return 'Only one type of special character is expected to separate words';
        } else if (err === 'no-word-separator-found') {
            return 'At least one special character is expected to separate words';
        } else if (err === 'not-enough-words') {
            return `The passphrase should contain at least ${MIN_WORDS_PASSPHRASE} words`;
        } else if (err === 'should-not-start-with-word-separator') {
            return 'The passphrase should not start with a special character';
        } else if (err === 'password-too-long') {
            return `The password is too long (max 128)`;
        } else if (err === 'should-not-end-with-word-separator') {
            return 'The passphrase should not end with a special character';
        } else if (err === 'adjacent-word-separator-not-allowed') {
            return 'Adjacent word separators are not allowed';
        } else if (err === 'a-word-is-too-short') {
            return `Words must have a minimum of ${MIN_CHARS_WORDS_PASSPHRASE} characters`;
        } else if (err === 'too-many-repetitions-passphrase') {
            return `A word has too many repetitions of the same character`;
        } else if (err === 'not-enough-characters') {
            const expected = protectionType === 'passphrase' ? MIN_CHARS_PASSPHRASE : MIN_CHARS_PASSWORD;
            const missing = expected - passphrase1.length;
            return `The ${protectionType} should contain at least ${expected} characters (${missing} more needed)`;
        } else {
            throw new Error('not an error');
        }
    };

    const validate = async (bypassValidationStarted: boolean = false): Promise<boolean> => {

        if (!bypassValidationStarted && !validationStarted) {
            return false;
        }
        let result = true;

        if (name.length === 0) {
            setNameError('Required');
            result = false;
        } else {
            setNameError('');
        }

        if (filePath.length === 0) {
            setFilePathError('Required');
            result = false;
        } else if (await ipcRenderer.fileExists(filePath)) {
            setFilePathError('A file with the same name exists already in this folder');
            result = false;
        } else {
            setFilePathError('');
        }
            
        if (passphrase1.length === 0) {
            setPassphrase1Error('Required');
            result = false;
        } else if (protectionType === 'password' && passwordUtil.isValidPassword(passphrase1, MIN_CHARS_PASSWORD) !== 'valid') {
            setPassphrase1Error(getErrorMessage(passwordUtil.isValidPassword(passphrase1, MIN_CHARS_PASSWORD)));
            result = false;
        } else if (protectionType === 'passphrase' && passwordUtil.isValidPassphrase(passphrase1, MIN_CHARS_PASSPHRASE, MIN_WORDS_PASSPHRASE, MIN_CHARS_WORDS_PASSPHRASE) !== 'valid') {
            setPassphrase1Error(getErrorMessage(passwordUtil.isValidPassphrase(passphrase1, MIN_CHARS_PASSPHRASE, MIN_WORDS_PASSPHRASE, MIN_CHARS_WORDS_PASSPHRASE)));
            result = false;
        } else {
            setPassphrase1Error('');
        }

        if (passphrase2.length === 0) {
            setPassphrase2Error('Required');
            result = false;
        } else if (passphrase1 !== passphrase2) {
            setPassphrase2Error(`The ${protectionType}s entered don't match`);
            result = false;
        } else {
            setPassphrase2Error('');
        }

        return result;
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

    const generatePassword = () => {

        const password = passwordUtil.generateEasyToRememberSecurePassword(15);
        setPassphrase1(password);
        setInputTypePassphrase1('text');
        updatePasswordStrength(password);
    };

    const onCreate = async () => {

        setValidationStarted(true);

        if (!await validate(true)) {
            return;
        }
        const vault = new Vault();
        vault.name = name;
        const encryptedPassword = await aes.encrypt(passphrase1, sessionKey, false);
        await ipcRenderer.saveVault(vault, encryptedPassword, sessionKey, filePath);
        localStorage.setItem('vaultedit-posx', window.screenX.toString());
        localStorage.setItem('vaultedit-posy', window.screenY.toString());
        ipcRenderer.closeVaultEditModal(filePath, encryptedPassword);
    };

    const resetPasswords = () => {

        setPassphrase1('');
        setPassphrase2('');
        setScore(0);
    };

    const onPaste = (e: SyntheticEvent) => {

        if (!ALLOW_PASTE_IN_PASSPHRASE2) {
            setSnackBar({ ...snackBar, open: true, message: 'Paste is not allowed in this field' });
            e.preventDefault();
        }
    };

    const onLeaveName = async () => {

        if (!filePath && name) {
            const home:string = await ipcRenderer.getHomeFolder();
            const separator:string = await ipcRenderer.getPathSeparator();
            setFilePath(home + separator + name + '.vlx');
        }
    };

    const updatePasswordStrength = (newPassword:string) => {
                
        setScore(passwordUtil.calculatePasswordStrength(newPassword, protectionType === 'passphrase'));       
    };

    const updatePasswordStrengthWithDebounce = useDebouncedCallback(updatePasswordStrength, 300);

    const onBlurInputPassphrase1 = () => {
        setTimeout(() => {
            const input = refInputPassphrase1.current.firstChild as HTMLInputElement;
            if (document.activeElement !== input) {
                setInputTypePassphrase1('password');
            }
        }, 30000);         
    };

    const onBlurInputPassphrase2 = () => {
        setTimeout(() => {
            const input = refInputPassphrase2.current.firstChild as HTMLInputElement;
            if (document.activeElement !== input) {
                setInputTypePassphrase2('password');
            }
        }, 30000);  
    };

    return (
        <div className="grow flex flex-col  h-full w-full items-center px-5 ">

            <div className="flex flex-col h-full w-full">
                <PageHeader displayBackButton={false} className="py-4">Create New Vault</PageHeader>

                <SnackBar snackBar={snackBar} setSnackBar={setSnackBar} width="auto" autoHideDuration={4000} />

                <div className="px-2 grow overflow-y-auto overflow-x-hidden custom-scrollbar ">
                    <FormControl className="pt-2" error={nameError.length > 0}>
                        <FormLabel>Name</FormLabel>
                        <Input value={name} onBlur={onLeaveName} onChange={(e) => setName(e.target.value)} autoFocus={true}
                            slotProps={{input: {spellCheck:false}}} />
                        <FormHelperText  sx={{marginTop:0,  visibility: nameError.length > 0 ? 'visible' : 'hidden' }}>
                            {nameError}&nbsp;
                        </FormHelperText>
                    </FormControl>

                    <FormControl className="pt-2" error={filePathError.length > 0}>
                        <FormLabel>Destination</FormLabel>
                        <Input  value={filePath} onChange={(e) => setFilePath(e.target.value)} 
                            slotProps={{input: {spellCheck:false}}}
                            endDecorator={
                                <div className="flex flex-row">
                                   
                                    <IconButton onClick={() => setFilePath('')} tabIndex={-1} sx={{width:'30px', marginRight:'0px'}} >
                                        <IconClear style={{  width: '14px' }} />
                                    </IconButton>
                                   
                                    <IconButton disabled={fileSelectorBtnDisabled} onClick={onOpenFilePath} tabIndex={-1}  sx={{width:'30px', marginRight:'0px'}}>
                                        <IconFolder style={{ }} />
                                    </IconButton>
                                    
                                </div>
                            } />
                        <FormHelperText sx={{marginTop:0,  visibility: filePathError.length > 0 ? 'visible' : 'hidden' }}>
                            {filePathError}&nbsp;
                        </FormHelperText>
                    </FormControl>

                    <FormControl className="py-2">
                        <ProtectionTypeSelector protectionType={protectionType} 
                        setProtectionType={setProtectionType} onChange={resetPasswords } />
                    </FormControl>

                    {protectionType === 'passphrase' && <FormHelperText >
                        Example: « kilogram/gulf/daycare/singer/moonshine »
                    </FormHelperText>}
                    {protectionType === 'password' && <FormHelperText >
                        Example: « cb+70+g3n8+gvhJ »                 
                    </FormHelperText>}

                    <FormControl className="pt-4" error={passphrase1Error.length > 0}>

                        <Input type={inputTypePassphrase1} placeholder={`Enter the ${protectionType}`} value={passphrase1} 
                            ref={refInputPassphrase1}
                            onBlur={onBlurInputPassphrase1}
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => { if (protectionType === 'password' && e.code === 'Space') { e.preventDefault(); } }}
                            onChange={(e) => {
                                setPassphrase1(e.target.value);
                                updatePasswordStrengthWithDebounce(e.target.value);
                            }}
                            className="password"
                            slotProps={{input: {spellCheck:false}}}
                            endDecorator={
                                <div className="flex flex-row items-center" >
                                    <div className="flex flex-row  my-2" >
                                        <IconButton tabIndex={-1} onClick={toggleVisibilityPassphrase1} title={inputTypePassphrase1 === 'password' ? 'Reveal the password' : 'Hide the password'}>
                                            {inputTypePassphrase1 === 'password' && <IconEye style={{ padding: 0, width: '18px' }} />}
                                            {inputTypePassphrase1 !== 'password' && <IconEyeOff style={{ padding: 0, width: '18px' }} />}
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row px-1" style={{
                                        display: protectionType === 'passphrase' ? 'none' : '',
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
                        <FormHelperText sx={{ marginTop:0,  visibility: passphrase1Error.length > 0 ? 'visible' : 'hidden' }}>
                            {passphrase1Error}&nbsp;
                        </FormHelperText>
                    </FormControl>
                    <PasswordStrength className="my-2 mx-10" score={score} nbOfChars={passphrase1.length}></PasswordStrength>
                    
                    <FormControl className="pt-4" error={passphrase2Error.length > 0}>

                        <Input type={inputTypePassphrase2} placeholder={`Re-enter the ${protectionType}`} value={passphrase2} onPaste={onPaste}
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => { if (e.code === 'Space') { e.preventDefault(); } }}
                            ref={refInputPassphrase2}
                            onBlur={onBlurInputPassphrase2}
                            slotProps={{input: {spellCheck:false}}}
                            className="password"
                            onChange={(e) => setPassphrase2(e.target.value)}
                            endDecorator={

                                <IconButton tabIndex={-1} onClick={toggleVisibilityPassphrase2} title={inputTypePassphrase2 === 'password' ? 'Reveal the password' : 'Hide the password'}>
                                    {inputTypePassphrase2 === 'password' && <IconEye style={{ padding: 0, width: '18px' }} />}
                                    {inputTypePassphrase2 !== 'password' && <IconEyeOff style={{ padding: 0, width: '18px' }} />}
                                </IconButton>

                            } />

                        <FormHelperText sx={{ marginTop:0, visibility: passphrase2Error.length > 0 ? 'visible' : 'hidden' }} >
                            {passphrase2Error}&nbsp;
                        </FormHelperText>
                    </FormControl>
                    
                </div>
                <Stack direction="row" spacing={2} justifyContent="center" className="pt-4 pb-2"
                    alignItems="stretch">
                    <Button color="neutral" size="lg" variant="solid" onClick={cancel} >CANCEL</Button>
                    <Button color="primary" size="lg" variant="solid" onClick={onCreate}>CREATE</Button>
                </Stack>
            </div>
        </div>
    );
}