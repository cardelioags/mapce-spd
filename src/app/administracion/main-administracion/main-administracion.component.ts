import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-administracion',
  templateUrl: './main-administracion.component.html',
  styleUrls: ['./main-administracion.component.css'],
})
export class MainAdministracionComponent implements AfterViewInit {


  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) { }
  
    ngAfterViewInit(): void {
      this.media.broadcast();
    }
}
