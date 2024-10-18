import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import UserService from '../services/user.service';

@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private _userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.log('Only logged in users guard working successfully');

    if (this._userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page.");
      return false;
    }
    throw new Error('Method not implemented.');
  }
}

export default OnlyLoggedInUsersGuard;
