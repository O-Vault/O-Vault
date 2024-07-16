import { Button } from "@mui/joy";
import { IconBack } from "@/icons/IconBack";
import { Typography } from "@mui/joy";

import { useContext } from "react";
import { RouterContext } from "@/common/RouterContext";
import { useTheme } from '@mui/joy/styles';


interface Params {
    children: string,
    displayBackButton: boolean,
    className?: string
}

export function PageHeader(params : Params) {

      const theme = useTheme();
      const {route, setRoute} = useContext(RouterContext);
      const navigate = (newRoute: string) => {

        route.current = newRoute;
        setRoute({...route});
    };

    return (

      <div className={params.className +  ' flex flex-row justify-center items-center'} style={{paddingBottom:15}}>

        {params.displayBackButton && <Button variant="solid" color="primary" 
          sx={{ padding: 1, marginRight:1.5 }} onClick={() => navigate('/')} >
            <IconBack style={{width:'22px'}} color={theme.vars.palette.primary.solidColor} />
          </Button>}

        <Typography level="h2"  className="grow" >
          {params.children}
        </Typography>
        
      </div>

    );
}