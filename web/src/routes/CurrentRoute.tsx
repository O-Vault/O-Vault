import { RouterContext } from "@/common/RouterContext";
import { useContext } from "react";


import { About } from "@/routes/About";
import { Home } from "@/routes/Home";
import { Open } from "@/routes/Open";
import { Settings } from "@/routes/Settings";
import { VaultEdit } from "@/routes/VaultEdit";
import { MessageBox } from "@/routes/MessageBox";
import { VaultItemEdit } from "./VaultItemEdit";

export function CurrentRoute() {

    const { route } = useContext(RouterContext);
    let currentPage;
    switch (route.current) {
        case '/':
            currentPage = <Home />;
            break;
        case '/settings':
            currentPage = <Settings />;
            break;
        case '/about':
            currentPage = <About />;
            break;    
        case '/open':
            currentPage = <Open />;
            break;
        case '/vault/new':
            currentPage = <VaultEdit />;
            break;
        case '/vault/item/edit':
            currentPage = <VaultItemEdit />;
            break;
        case '/msgbox':
            currentPage = <MessageBox />;
            break;
        default:
            currentPage = <Home />;
            break;
    }
    return (<>
        
        <>{currentPage}</>
    </>);
}