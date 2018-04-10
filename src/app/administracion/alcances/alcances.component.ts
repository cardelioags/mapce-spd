import { Component, OnInit } from '@angular/core';
import {
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  TdDataTableService,
  IPageChangeEvent } from '@covalent/core';
import { MatDialog } from '@angular/material';
import { AlcancesService } from '../../services/alcances.service';
import { ModalNuevoAlcanceComponent } from './modales/modal-nuevo-alcance/modal-nuevo-alcance.component';
import { ModalEditarAlcanceComponent } from './modales/modal-editar-alcance/modal-editar-alcance.component';

@Component({
  selector: 'app-alcances',
  templateUrl: './alcances.component.html',
  styleUrls: ['./alcances.component.css'],
  providers: [AlcancesService]
})
export class AlcancesComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'descripcion', label: 'Descripción', sortable: true, width: 200 },
    { name: 'menus', label: 'Permisos'}
  ];

  data: any[] = []; // see json data

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  heightTable = 100;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 50;
  sortBy = 'descripcion';
  selectable = true;
  selectedRows: any[] = [];
  multiple = false;
  clickable = true;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _alcances: AlcancesService,
    private dialogNuevo: MatDialog,
    private dialogEditar: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialogNuevo.open(ModalNuevoAlcanceComponent, {
      maxWidth: '500px',
      width: '100%',
    });
  }
  openDialogEditar() {
    const dialogRef = this.dialogEditar.open(ModalEditarAlcanceComponent, {
      maxWidth: '500px',
      width: '100%',
      data: this.selectedRows[0]
    });
  }

  ngOnInit(): void {
    this._alcances.getAlcances().subscribe(
      (res: any) => {
        this.data = res;
        console.log(res);
        this.filter();
        // this.heightTable = 500;
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

