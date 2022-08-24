import { Component } from '@angular/core';
import { UpdateAppService } from './services/update-app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckForUpdatesService } from './services/check-for-updates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-angular';
  constructor(
    private updateService:UpdateAppService,
    private matSnackBar:MatSnackBar,
    private checkUpdateService:CheckForUpdatesService
    ){

  }
  ngOnInit(): void {
    // this.updateService.checkForUpdates();
    this.checkUpdateService.checkForUpdates();
    addEventListener('offline',()=>{
      this.matSnackBar.open('Please check your internet connection','OK',{
        duration:3000
      })
    })
    addEventListener('online',()=>{
      this.matSnackBar.open('Back online','OK',{
        duration:3000
      })
    })

  }
}
