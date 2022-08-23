import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public dataSource = [
    {position: 1, name: 'fullscreen', description: 'All of the available display area is used and no user agent chrome is shown.'},
    {position: 2, name: 'standalone', description: 'The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.'},
    {position: 3, name: 'minimal-ui', description: 'The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.'},
    {position: 4, name: 'browser', description: 'The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight'];

  constructor() { }

  ngOnInit(): void {
  }

}
