import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties,
    className?: string
}

export function IconCheck({ style, className }: Params) {
    const theme = useTheme();
    return (
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke-width="2.5" stroke={theme.palette.success[500]} fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
        </svg>

    );
}