import { CURRENT_PALETTE, Palettes } from "@/common/Palettes";
import { IconBadgeLetter } from "@/icons/IconBadgeLetter";
import { useTheme } from "@mui/joy";

interface Params {
  itemName: string,
  className?: string,
  fontFamily?: string
}

export function BadgeLetter({ itemName, className }: Params) {

  const itemsLetterFont = 'Arial, sans-serif';

  const theme = useTheme();

  const getItemColor = (itemName: string): string => {

    if (!itemName) {
      return theme.palette.divider;
    }
    const colors: string[] = Palettes[CURRENT_PALETTE];
    const colorIndex = (itemName.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)) % colors.length;
    return colors[colorIndex];
  };

  const getItemFirstLetter = (itemName: string): string => {

    if (itemName) {
      return itemName.toUpperCase().charAt(0);
    } else {
      return '?';
    }
  };

  return (
     <IconBadgeLetter className={className} style={{ color: getItemColor(itemName) }} fontFamily={itemsLetterFont} color={theme.palette.background.body}
      letter={getItemFirstLetter(itemName)} x={12} y={16.161} />
  );
}