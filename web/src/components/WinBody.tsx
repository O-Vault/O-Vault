
import { CurrentRoute } from "@/routes/CurrentRoute";
import { useTheme } from "@mui/joy";


export function WinBody()  { 
    const theme = useTheme();
    return (
        <div className="grow overflow-y-auto overflow-x-hidden custom-scrollbar" style={{background: theme.palette.background.body}}
            >
            <div className="h-full"  >
                <CurrentRoute />
            </div>
        </div>
    );
}