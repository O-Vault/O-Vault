import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties,
    className?: string
}

export function IconMinimize({ style, className }: Params) {

    const theme = useTheme();
    return (
        
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg"
            width="16" height="18"
            viewBox="0 0 24 24" strokeWidth="1" stroke={theme.palette.text.secondary}
            fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M 5 12 L 20 12"/>
        </svg>
    );
}