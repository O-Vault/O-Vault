import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconSearch({style}:Params) {
    const theme = useTheme();
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" 
        strokeWidth="1" stroke={theme.palette.text.secondary} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
        </svg>
    );
}


