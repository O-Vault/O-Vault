
import { Dispatch, SetStateAction } from "react";
import { useTheme } from '@mui/joy/styles';
import { Snackbar } from "@mui/joy";

interface SnackBarParams {
    snackBar: SnackBarState,
    setSnackBar: Dispatch<SetStateAction<SnackBarState>>,
    width?: string,
    autoHideDuration? : number
}
export interface SnackBarState {
    open: boolean;
    message: string;
    isError?: boolean 
}

export function SnackBar({snackBar, setSnackBar, width, autoHideDuration}:SnackBarParams) {

    const isErrorMsg = snackBar.isError !== undefined ? snackBar.isError : false;
    const theme = useTheme();
    return (
      <Snackbar 
        sx={{
          backgroundColor: isErrorMsg ? theme.vars.palette.danger[500] : theme.vars.palette.text.secondary,
          color: isErrorMsg? theme.vars.palette.text.secondary: theme.vars.palette.background.level1,
          border: 'none',
          fontWeight: 600,
          textAlign: 'center',
          minWidth: 'auto',
          width: width || '90%',
          bottom: '40px',
        }}
        onClick={() => setSnackBar({...snackBar, open: false})}
        anchorOrigin={{ 
          vertical: 'bottom',
          horizontal: 'center' 
        }}
        open={snackBar.open}
        onClose={() => setSnackBar({...snackBar, open: false})}
        autoHideDuration={autoHideDuration || 2000} >
        <div className="w-full">{snackBar.message}</div>
      </Snackbar>
    );
}