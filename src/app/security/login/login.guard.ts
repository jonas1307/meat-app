import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    checkAuthentication(path: string) {
        const loggedIn = this.loginService.isLoggedIn()

        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`)
        }

        return loggedIn
    }

    canLoad(route: Route): boolean {
        console.log('canLoad')
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('canActivate')
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }
}
