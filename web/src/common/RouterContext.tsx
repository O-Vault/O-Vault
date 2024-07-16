import { createContext, Dispatch } from 'react';

export class Route {

    constructor(current?: string, args? : string[]) {
        this.current = current || '/' ;
        this.args = args || [];
    }
    current: string;
    args: string[];
}

export class RouteContainer {

    constructor() {
        this.route = new Route('/');
    }
    route: Route;
    setRoute?: Dispatch<React.SetStateAction<Route>>;
}

export const RouterContext = createContext<RouteContainer>( new RouteContainer() );