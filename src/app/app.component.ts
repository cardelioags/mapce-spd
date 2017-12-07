import { Component, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  animations: [],
})
export class AppComponent implements AfterViewInit {

  constructor(public media: TdMediaService) {}

  ngAfterViewInit(): void {
 
  }

}