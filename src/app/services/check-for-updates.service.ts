import { ApplicationRef, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { UpdatePopupComponent } from '../shared/update-popup/update-popup.component';
import { UpdateAppService } from './update-app.service';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdatesService {

  constructor(
    private appRef: ApplicationRef,
    private dialog: MatDialog,
    private updates: SwUpdate,
    private updateService: UpdateAppService,
    private matSnackBar:MatSnackBar
    ) {

  }

  public checkForUpdates() {
    console.log(1);

    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(1000 * 5);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    everySixHoursOnceAppIsStable$.subscribe(() => {
      this.updates.checkForUpdate().then((res) => {
        console.log('Is there any update after 5 seconds:>> ', res);
        if (res) {
          this.openUpdateDialog();
        }
      })
    })

  }
  openUpdateDialog() {
    console.log('Opening update dialog popup new');
    window.location.reload();
    this.matSnackBar.open('New version of app is updated','OK',{duration:8000})
    // const dialogRef = this.dialog.open(UpdatePopupComponent, {
    //   width: '400px',
    //   // data: {name: this.name, animal: this.animal},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
