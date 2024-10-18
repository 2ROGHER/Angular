import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { InputSearchComponent } from "../components/input-search/input-search.component";
import { state } from "@angular/animations";

class UnsearchedTermGuard implements CanDeactivate<InputSearchComponent> {
  canDeactivate(component: InputSearchComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    console.log("Unsearched term");
    console.log(currentRoute.params);
    console.log(nextState.url);
    // return component.canDeactivate() || window.alert("Are you sure you want to do this ? ");
    return true;
  }

}
