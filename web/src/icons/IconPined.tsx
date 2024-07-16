import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconPined({style}:Params) {
    const theme = useTheme();
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke={theme.palette.text.secondary} fill="none" 
        strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
            <path d="M12 16l0 5" />
            <path d="M8 4l8 0" />
        </svg>
    );
}