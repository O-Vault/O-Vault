import { CSSProperties } from "react";

interface Params {
  style?: CSSProperties,
  className?: string,
  color?: string
}

export function IconBack({ style, className, color }: Params) {
    return (
        <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" 
            strokeWidth="1" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
        </svg>
    );
}