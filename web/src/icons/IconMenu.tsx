import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties,
    className?: string
}

export function IconMenu({ style, className }: Params) {
    const theme = useTheme();
    return (
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" viewBox="0 0 24 24"
            strokeWidth="1" stroke={theme.palette.text.secondary} fill="none" strokeLinecap="round" 
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
        </svg>
    );
}