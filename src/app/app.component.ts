import { Component } from '@angular/core';
import { UpdateAppService } from './services/update-app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-angular';
  constructor(
    private updateService:UpdateAppService,
    private matSnackBar:MatSnackBar
    ){

  }
  ngOnInit(): void {
    this.updateService.checkForUpdates();
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
