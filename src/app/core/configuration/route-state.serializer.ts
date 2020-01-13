import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';

export interface RouterStateParams {
    url: string;
    params: Params;
    queryParams: Params;
}

// Make the router snapshot to { url, params, queryParams }
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
    serialize(routerState: RouterStateSnapshot): RouterStateParams {
        const {
            url,
            root: { queryParams }
        } = routerState;

        let { root: route } = routerState;
        let params = route.params;

        while(route.firstChild) {
            route = route.firstChild;
            params = { ...params, ...route.params };
        }

        return { url, params, queryParams };
    }
}