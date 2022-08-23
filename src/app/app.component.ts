import { Component } from '@angular/core';
import { UpdateAppService } from './services/update-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-angular';
  constructor(private updateService:UpdateAppService){

  }
  ngOnInit(): void {
    console.log('Run');
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateService.checkForUpdates();
  }
}
