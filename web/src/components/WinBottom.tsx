import { GlobalContext } from "@/common/GlobalContext";
import { Typography, useTheme } from "@mui/joy";
import { useContext } from "react";

export function WinBottom() {
    const { context } = useContext(GlobalContext);
    const theme = useTheme();
    
    const extractFilename = (path: string) => {
        if (path === null || path === undefined || path.length === 0) {
            return '';
        } else {
            if (path.lastIndexOf('/') >= 0) {
                return path.substring(path.lastIndexOf('/') + 1);
            } else if (path.lastIndexOf('\\') >= 0) {
                return path.substring(path.lastIndexOf('\\') + 1);
            } else {
                return path;
            }
        }
    };

    const statusText = (context.vaultLoaded) ? `${context.vault.name} (${context.vault.items.length})`
        : extractFilename(context.vaultPath);
    const style = window.isModalWindow || !statusText ? {
        background: theme.palette.background.body,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    } : {};

    return (
        <div style={style}>
            <Typography sx={{ color: theme.palette.text.secondary }} level="body-sm" className="text-center py-2" >
                {statusText}
            </Typography>
        </div>
    );
}