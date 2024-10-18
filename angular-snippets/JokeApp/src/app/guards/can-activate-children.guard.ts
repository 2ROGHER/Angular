import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
class AlwaysAuthChildrenGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      console.log("canActivate for children components works successfully");
      return true;
  }
}

export default AlwaysAuthChildrenGuard;
