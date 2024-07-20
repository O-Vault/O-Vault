import { CSSProperties } from "react";

interface Params {
    style?: CSSProperties,
    className?: string,
    letter: string,
    color: string,
    fontFamily: string,
    x: number,
    y: number,
    width?: number,
    height?: number,
    onClick?: () => void
}

export function IconBadgeLetter({ style, className, letter, color, fontFamily, x, y, width, height, onClick }: Params) {

    return (
        <svg onClick={onClick} style={style} className={className} width={width || 40} height={height || 40} viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none"
            strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" ></path>
            <path d="M 12 2 L 12.324 2.001 L 12.642 2.005 L 13.258 2.022 C 13.358 2.026 13.457 2.03 13.557 2.035 L 14.136 2.069 L 14.689 2.115 C 19.474 2.579 21.421 4.526 21.885 9.311 L 21.931 9.864 L 21.965 10.443 L 21.978 10.742 L 21.995 11.358 L 22 12 L 21.995 12.642 L 21.978 13.258 C 21.975 13.359 21.97 13.459 21.965 13.557 L 21.931 14.136 L 21.885 14.689 C 21.421 19.474 19.474 21.421 14.689 21.885 L 14.136 21.931 L 13.557 21.965 L 13.258 21.978 L 12.642 21.995 L 12 22 L 11.358 21.995 L 10.742 21.978 C 10.641 21.975 10.541 21.97 10.443 21.965 L 9.864 21.931 L 9.311 21.885 C 4.526 21.421 2.579 19.474 2.115 14.689 L 2.069 14.136 L 2.035 13.557 L 2.022 13.258 L 2.005 12.642 C 2.002 12.432 2 12.218 2 12 L 2.001 11.676 L 2.005 11.358 L 2.022 10.742 C 2.025 10.641 2.03 10.541 2.035 10.443 L 2.069 9.864 L 2.115 9.311 C 2.579 4.526 4.526 2.579 9.311 2.115 L 9.864 2.069 L 10.443 2.035 L 10.742 2.022 L 11.358 2.005 C 11.568 2.002 11.782 2 12 2 Z"
                fill="currentColor" strokeWidth="1" stroke="none"></path>

            <text fill={color} fontFamily={fontFamily} fontSize="12px" fontWeight={500}
                stroke="none" textAnchor="middle" x={x} y={y} >{letter}</text>

        </svg>
    );
}
