import { CURRENT_PALETTE, Palettes } from "@/common/Palettes";
import { IconBadgeLetter } from "@/icons/IconBadgeLetter";
import { useTheme } from "@mui/joy";

interface Params {
  itemName: string,
  className?: string,
  fontFamily?: string,
  width?: number,
  height?: number,
  paletteIndex: number,
  onClick?: () => void
}

export function BadgeLetter({ itemName, className, width, height, paletteIndex, onClick }: Params) {

  const itemsLetterFont = 'Arial, sans-serif';

  const theme = useTheme();

  const getItemColor = (): string => {

    if (paletteIndex !== undefined) {
      return Palettes[CURRENT_PALETTE][paletteIndex];
    } else {
      return theme.palette.background.winbar;
    }
  };

  const getItemFirstLetter = (): string => {

    if (itemName) {
      return itemName.toUpperCase().charAt(0);
    } else {
      return ' ';
    }
  };

  return (
    itemName && <IconBadgeLetter width={width} height={height} onClick={onClick} className={className} style={{ color: getItemColor() }} fontFamily={itemsLetterFont} color={theme.palette.background.body}
      letter={getItemFirstLetter()} x={12} y={16.161} />
  );
}