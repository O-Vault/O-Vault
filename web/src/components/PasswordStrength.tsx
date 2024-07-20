import {  ColorPaletteProp, LinearProgress, Typography } from "@mui/joy";

interface Params {
    score:number,
    nbOfChars:number,
    className: string
}

export function PasswordStrength({score, nbOfChars, className}:Params) {
    
    let color : ColorPaletteProp;
    let text;
    const value = nbOfChars === 0 ? 0 : (score === 0 ? 5 : score);
    if (score>75) {
        color = 'success';
        text = 'STRONG';
    } else if (score>50 && score<=75) {
        color = 'neutral';
        text = 'GOOD';
    } else if (score>25 && score<=50) {
        color = 'warning';
        text = 'WEAK';
    } else if (nbOfChars ===0) {
        color = undefined;
        text = 'PASSWORD STRENGTH';
    } else {
        color = 'danger';
        text = 'VERY WEAK';
    }

    return (
        <>
            <style>{`
                    .MuiLinearProgress-colorDanger::before {
                        background: #EC1C22;
                    }
                    .MuiLinearProgress-colorWarning::before {
                        background: #FF9900;
                    }
                    .MuiLinearProgress-colorNeutral::before {
                        background: #F3D918;
                    }
                    .MuiLinearProgress-colorSuccess::before {
                        background: #00FF00;
                    }
                    
            `}</style>
            <LinearProgress className={className}
                determinate
                color={color}
                size="sm"
                thickness={28}
                value={value}
                sx={{
                    '--LinearProgress-radius': '0px',
                     '--LinearProgress-progressThickness': '28px'
                }}
            >
                <Typography
                    level="body-sm"                 
                    textColor="common.white"
                    sx={{ mixBlendMode: 'difference' }}
                >
                   {text} 
                  
                </Typography>
            </LinearProgress>
        </>
    );
}