import { Dropdown, IconButton, ListDivider, Menu, MenuButton, MenuItem, Typography, useTheme } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/common/GlobalContext";

import { IconApp } from "@/icons/IconApp";
import { IconClose } from "@/icons/IconClose";
import { IconMenu } from "@/icons/IconMenu";
import { IconPin } from "@/icons/IconPin";
import { IconPined } from "@/icons/IconPined";
import { RouterContext } from "@/common/RouterContext";
import { util } from "o-vault-lib";
import { IconMinimize } from "@/icons/IconMinimize";



export function WinBar() {

    const WIDTH_LIMIT = 250;

    const theme = useTheme();

    const { route, setRoute } = useContext(RouterContext);
    const { context, setContext } = useContext(GlobalContext);
    
    const [width, setWidth] = useState(0);
    const [alwaysOnTop, setAlwaysOnTop] = useState(false);
    const [closeBtnDisabled, setCloseBtnDisabled] = useState(false);

    const onOpenClick = () => {
        route.current = '/open';
        route.args = ['open-vault'];
        setRoute({ ...route });
    };

    const showTitle = width > WIDTH_LIMIT;

    const onNewClick = () => {
        route.current = '/open';
        route.args = ['new-vault'];
        setRoute({ ...route });
    };

    const addNewEntryClick = () => {
        const event = new Event('onNewEntry');
        document.dispatchEvent(event);
    };

    const handleResize = () => {

        setWidth(document.body.clientWidth);
    };

    const close = async () => {

        if (context.vaultLoaded) {
            setCloseBtnDisabled(true);
            context.showWaitCursor = true;
            setContext({...context});
            const result = await window.electronAPI.openMessageBox({
                text: 'The vault will be closed \n\nAre you sure you want to continue ?',
                title: 'Confirmation',
                okBtnLabel: 'QUIT',
                cancelBtnLabel: 'CANCEL'
            }, 400, 210);
            setCloseBtnDisabled(false);
            context.showWaitCursor = false;
            setContext({...context});
            if (result !== undefined && result.returnCode === 'OK') {
                window.close();
            }
        } else {
            window.close();
        }


    };

    const toggleAlwaysOnTop = () => {

        const newValue = !alwaysOnTop;
        window.electronAPI.appSetAlwaysOnTop(newValue);
        setAlwaysOnTop(newValue);

    };

    const closeVault = () => {

        const event = new Event('onCloseVault');
        document.dispatchEvent(event);
    };

    async function retrieveAlwayOnTop() {
        const val = await window.electronAPI.appGetAlwaysOnTop();
        setAlwaysOnTop(val);
    }
    
    const openSettings = async () => {

        const posX = Number(localStorage.getItem('settings-posx') || -1);
        const posY = Number(localStorage.getItem('settings-posy') || -1);
        context.showWaitCursor = true;
        setContext({...context});
        await window.electronAPI.openSettingsModal(500, 420, posX, posY);
        context.showWaitCursor = false;
        setContext({...context});
    };

    const openAbout = async () => {

        context.showWaitCursor = true;
        setContext({...context});
        await window.electronAPI.openAboutModal(500, 500);
        context.showWaitCursor = false;
        setContext({...context});
    };


    useEffect(() => {

        retrieveAlwayOnTop();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="win-bar"
            className="flex-row flex items-center  text-center px-1 py-1"
        >
            <style>{`
                #win-bar button:hover {
                    background-color: ${util.lightenDarkenColor(theme.palette.background.winbar, 20)};
            `}
            </style>
            <span title="O-Vault Password Manager">
                <IconApp style={{ width: '16px' }} className="ml-2" />
            </span>

            <Dropdown  >
                <MenuButton variant="plain" size="sm" sx={{marginLeft:0.5,paddingLeft:0.5,paddingRight:0.5}}   >
                    <IconMenu />
                </MenuButton>
                <Menu>
                    {!context.vaultLoaded && <MenuItem onClick={onNewClick} >New</MenuItem>}
                    {!context.vaultLoaded && <MenuItem onClick={onOpenClick}>Open</MenuItem>}
                    {context.vaultLoaded && <MenuItem onClick={addNewEntryClick} >Add New</MenuItem>}
                    {context.vaultLoaded && <MenuItem onClick={closeVault}>Close Vault</MenuItem>}
                    <ListDivider />
                    <MenuItem onClick={openSettings}>App Settings</MenuItem>
                    <MenuItem onClick={openAbout}>About</MenuItem>
                    {window.isDev && <MenuItem onClick={() => window.electronAPI.openDevTools(window.isModalWindow)}>Dev Tools</MenuItem>}
                    <MenuItem onClick={() => close()}>Exit</MenuItem>
                </Menu>
            </Dropdown>

            <div className="grow app-region-drag">
                {showTitle && <Typography sx={{ color: theme.palette.text.secondary }} level="body-md">
                    O-Vault
                </Typography>}
                {!showTitle && <span className="invisible">x</span>}
            </div>

            {!alwaysOnTop && <IconButton onClick={toggleAlwaysOnTop} title="Pin Window to stay always on top" >
                <IconPin style={{ width: '16px' }} />
            </IconButton>}
            {alwaysOnTop && <IconButton onClick={toggleAlwaysOnTop} title="Unpin window" >
                <IconPined style={{ width: '16px' }} />
            </IconButton>}
            <IconButton onClick={window.electronAPI.appMinimize} title="Minimize"  >
                <IconMinimize style={{ width: '15px' }} />
            </IconButton>
            <IconButton disabled={closeBtnDisabled} onClick={() => close()} title="Close">
                <IconClose style={{ width: '18px' }} />
            </IconButton>
        </div>
    );
}