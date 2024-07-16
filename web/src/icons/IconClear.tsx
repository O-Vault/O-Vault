import { useTheme } from '@mui/joy/styles';
import { CSSProperties } from 'react';

interface Params {
    style?: CSSProperties
}

export function IconClear({style}: Params) {

    const theme = useTheme();
    
    return (
        <svg style={style}
            fill={theme.vars.palette.text.tertiary} width="24" height="24" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path d="M 12 10.106 L 9.159 7.264 C 8.636 6.742 7.788 6.742 7.264 7.264 C 6.742 7.788 6.742 8.636 7.264 9.159 L 10.106 12 L 7.264 14.841 C 6.742 15.364 6.742 16.212 7.264 16.735 C 7.788 17.258 8.636 17.258 9.159 16.735 L 12 13.894 L 14.841 16.735 C 15.364 17.258 16.212 17.258 16.735 16.735 C 17.258 16.212 17.258 15.364 16.735 14.841 L 13.894 12 L 16.735 9.159 C 17.258 8.636 17.258 7.788 16.735 7.264 C 16.212 6.742 15.364 6.742 14.841 7.264 L 12 10.106 Z M 22.548 12 C 22.548 17.825 17.825 22.548 12 22.548 C 6.174 22.548 1.452 17.825 1.452 12 C 1.452 6.174 6.174 1.452 12 1.452 C 17.825 1.452 22.548 6.174 22.548 12 Z" ></path>
        </svg>
    );
}