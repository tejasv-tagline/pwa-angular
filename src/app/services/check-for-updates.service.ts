import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { UpdateAppService } from './update-app.service';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdatesService {

  constructor(private appRef: ApplicationRef,private updates: SwUpdate,private updateService:UpdateAppService) {

  }

  public checkForUpdates(){
    console.log(1);
    
    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() => this.updateService.checkForUpdates());

  }
}
