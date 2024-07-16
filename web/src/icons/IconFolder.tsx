import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconFolder({style}:Params) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={style} width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke={theme.palette.text.secondary} 
        fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
        </svg>
    );
}