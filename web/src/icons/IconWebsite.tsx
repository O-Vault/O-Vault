import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties,
    className?: string
}

export function IconWebsite({ style, className }: Params) {

    const theme = useTheme();

    return (
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
            strokeWidth="1" stroke={theme.palette.text.secondary} fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>

    );
}