import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-desempeno',
  styleUrls: ['./desempeno.component.css'],
  templateUrl: './desempeno.component.html',
  animations: [],
})
export class DesempenoComponent implements AfterViewInit {

 
  navmenu: Object[] = [{
      icon: 'looks_one',
      route: '.',
      title: 'First item',
      description: 'Item description',
    }, {
      icon: 'looks_two',
      route: '.',
      title: 'Second item',
      description: 'Item description',
    }, {
      icon: 'looks_3',
      route: '.',
      title: 'Third item',
      description: 'Item description',
    }, {
      icon: 'looks_4',
      route: '.',
      title: 'Fourth item',
      description: 'Item description',
    }, {
      icon: 'looks_5',
      route: '.',
      title: 'Fifth item',
      description: 'Item description',
    },
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}