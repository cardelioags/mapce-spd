import { Component, OnInit } from '@angular/core';
import {
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  TdDataTableService,
  IPageChangeEvent } from '@covalent/core';
import { OpcionesService } from '../../services/opciones.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalesNuevoComponent } from './modales/modales.nuevo.component';



@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css'],
  providers: [OpcionesService, MatDialog]
})
export class OpcionesComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'titulo', label: 'Título', sortable: true, width: 200 },
    { name: 'descripcion', label: 'Descripción', filter: true},
    { name: 'icono', label: 'Ícono' },
    { name: 'ruta', label: 'URL (Ruta)'},
    { name: 'depende', label: 'Depende de'},
    { name: 'tipo', label: 'Tipo de opción'},
  ];

  data: any[] = []; // see json data

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  heightTable = 100;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 50;
  sortBy = 'titulo';
  selectable = true;
  selectedRows: any[] = [];
  multiple = true;
  clickable = true;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _opciones: OpcionesService,
    public _dialog: MatDialog
  ) { }

  openDialogNuevaOpcion(): void {
    const dialogRef = this._dialog.open(ModalesNuevoComponent, {
      width: '700px',
      data: 'Los datos a enviar'
    });
    dialogRef.afterClosed().subscribe( result => {
      console.log('Se cerró el diálogo de Nueva Opción');
    });
  }

  ngOnInit(): void {
    this._opciones.get(
      res => {
        this.data = res;
        console.log(res);
        this.filter();
        this.heightTable = 500;
      }
    );
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  showAlert(event: any): void {
    const row: any = event.row;
    // .. do something with event.row
  }

  filter(): void {
    let newData: any[] = this.data;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
