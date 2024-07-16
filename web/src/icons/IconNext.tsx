import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconNext({style}: Params) {

    const theme = useTheme();
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke={theme.palette.text.secondary} fill="none" 
        strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
        </svg>
    );
}