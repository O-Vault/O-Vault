


import { useTheme } from "@mui/joy";
import { ReactNode } from "react";

interface Params {
    children: ReactNode,
    colorPickerOpen: boolean,
    onClose: () => void,
    // eslint-disable-next-line no-unused-vars
    onChange: (newPaletteIndex: number) => void
}

export function ColorPicker({ children, colorPickerOpen, onClose, onChange }: Params) {

    const NB_COLORS_PER_ROW = 4;
    const theme = useTheme();

    const onChangeColor = (newPaletteIndex: number) => {

        onChange(newPaletteIndex);
    };

    const getColor = (color: string, index: number): ReactNode => {

        return color && (<div key={index} onClick={() => onChangeColor(index)} className="palette-color" style={{
            width: '28px', height: '28px',
            background: color,
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: color
        }}>
            &nbsp;
        </div>);
    };

    const getColors = (): string[][] => {

        const lines = [];

        for (let row = 0; row < Math.ceil(theme.palette.customColors.length / NB_COLORS_PER_ROW); row++) {

            const colors: string[] = [];
            for (let col = 0; col < NB_COLORS_PER_ROW; col++) {
                const currColor = theme.palette.customColors[row * NB_COLORS_PER_ROW + col];
                colors.push(currColor);
            }
            lines.push(colors);
        }
        return lines;
    };

    return (
        <div className="relative">
            {children}
            <style>{`
                .palette-color:hover {
                    border-color: ${theme.palette.text.primary}!important;
                    cursor: pointer;
                }
            `}
            </style>
            <div style={{
                position: 'fixed', display: colorPickerOpen ? '' : 'none', left: 0, right: 0, bottom: 0,
                top: 0, zIndex: 100
            }}
                onClick={onClose}></div>
            <div className="absolute" style={{
                display: colorPickerOpen ? '' : 'none', right: '10px', marginTop: '4px',
                zIndex: 101, padding: '8px', borderRadius: '2px', width: '124px',
                backgroundColor: theme.palette.background.winbar
            }}>

                {getColors().map((line, indexLine) => (

                    <div key={indexLine} className="flex flex-row items-center ">
                        {line.map((color, indexCol) => (
                            getColor(color, indexLine * NB_COLORS_PER_ROW + indexCol)
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}