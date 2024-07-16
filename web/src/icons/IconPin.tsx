import { useTheme } from "@mui/joy";
import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties
}

export function IconPin({style}: Params) {
    const theme = useTheme();
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke={theme.palette.text.secondary}
        fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
            <path d="M9 15l-4.5 4.5" />
            <path d="M14.5 4l5.5 5.5" />
        </svg>
    );
}