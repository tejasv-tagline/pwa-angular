import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatePopupComponent } from '../shared/update-popup/update-popup.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateAppService {
  constructor(private updates: SwUpdate,private dialog:MatDialog) {
  }
  public count = 1;
  public checkForUpdates(){
    console.log("Checking for updates here",this.count);
    this.count ++;
    this.updates.versionUpdates.subscribe((evt: any) => {
      console.log('evt :>> ', evt);
      switch (evt.type) {
        case 'NO_NEW_VERSION_DETECTED':
          console.log('No new version,You are ready to go');
          break;
        case 'VERSION_DETECTED':

          console.log(`Downloading new app version: ${evt.version.hash}`);
          this.openUpdateDialog();
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(
            `New app version ready for use: ${evt.latestVersion.hash}`
          );
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(
            `Failed to install app version '${evt.version.hash}': ${evt.error}`
          );
          break;
      }
    });
  }


  openUpdateDialog(){
    console.log('Opening update dialog popup');
    
      const dialogRef = this.dialog.open(UpdatePopupComponent, {
        width: '250px',
        // data: {name: this.name, animal: this.animal},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        window.location.reload();
      });
  }
}
