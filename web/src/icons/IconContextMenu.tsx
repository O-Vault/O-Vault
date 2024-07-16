import { useTheme } from '@mui/joy/styles';
import { CSSProperties } from 'react';

interface Params {
    style?: CSSProperties
}

export function IconContextMenu({style}: Params) {
    const theme = useTheme();
    
    return (
        <svg style={style} width="22" height="22" viewBox="3.977 0 15.025 24"  stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <ellipse fill={theme.vars.palette.text.tertiary}  cx="11.49" cy="5.006" rx="1.595" ry="1.595"></ellipse>
            <ellipse fill={theme.vars.palette.text.tertiary} cx="11.489" cy="12.064" rx="1.595" ry="1.595"></ellipse>
            <ellipse fill={theme.vars.palette.text.tertiary}  cx="11.49" cy="19.085" rx="1.595" ry="1.595"></ellipse>
        </svg>
    );
}