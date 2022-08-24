import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cloneURL(url:string) {
    navigator.clipboard.writeText(url).then(() => {
      this.matSnackBar.open('Clone url copied', 'OK', {
        duration: 5000
      })
    });
  }
}
