import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UpdatePopupComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[
    UpdatePopupComponent
  ]
})
export class SharedModule { }
