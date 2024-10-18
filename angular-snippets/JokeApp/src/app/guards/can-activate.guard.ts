import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

// This is a simple, basic router guard
// this is a service that can be to injected into components
@Injectable()
class AlwaysAuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('Always activated');
    return true;
  }
}

export default AlwaysAuthGuard;
