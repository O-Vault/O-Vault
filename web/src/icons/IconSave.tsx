import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconSave({style}:Params) {
    const theme = useTheme();
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" 
        stroke={theme.palette.text.secondary} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M14 4l0 4l-6 0l0 -4" />
        </svg>
    );
}