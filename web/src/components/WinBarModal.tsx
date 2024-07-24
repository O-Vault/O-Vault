import { RouterContext } from "@/common/RouterContext";
import { IconApp } from "@/icons/IconApp";
import { IconClose } from "@/icons/IconClose";
import { IconButton, Typography, useTheme } from "@mui/joy";
import { util } from "o-vault-lib";
import { useContext, useEffect, useState } from "react";
import { MessageBoxArgs } from "../routes/MessageBox";
import { VaultItem } from "@/common/Vault";

export function WinBarModal() {

    const theme = useTheme();
    const { route } = useContext(RouterContext);
    const [title, setTitle] = useState('');

    const close = () => {

        if (route.current === '/settings') {
            localStorage.setItem('settings-posx', window.screenX.toString());
            localStorage.setItem('settings-posy', window.screenY.toString());
        } else if (route.current === '/vault/new') {
            localStorage.setItem('vaultedit-posx', window.screenX.toString());
            localStorage.setItem('vaultedit-posy', window.screenY.toString());
        } else if (route.current === '/vault/item/edit') {
            localStorage.setItem('vaultitemedit-posx', window.screenX.toString());
            localStorage.setItem('vaultitemedit-posy', window.screenY.toString());
        }
        window.close();

    };

    const getTitle = (args: object): string => {

        if (route.current === '/about') {
            return 'About';
        } else if (route.current === '/settings') {
            return 'Settings';
        } else if (route.current === '/vault/item/edit') {
            if (args && (args as VaultItem).id) {
                return 'Edit Entry';
            } else {
                return 'Add New Entry';
            }
        } else if (args && (args as MessageBoxArgs).title) {
            return (args as MessageBoxArgs).title;
        } else {
            return 'O-Vault';
        }
    };

    useEffect(() => {

        setTitle(getTitle(window.modalArgs as MessageBoxArgs));

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
                <IconApp style={{ width: '16px' }} className="mx-2" />
            </span>

            <div className="grow app-region-drag">
                <Typography sx={{ color: theme.palette.text.secondary }} level="body-md">
                    {title}
                </Typography>
            </div>

            <IconButton onClick={() => close()} title="Close">
                <IconClose style={{ width: '18px' }} />
            </IconButton>
        </div>
    );
}