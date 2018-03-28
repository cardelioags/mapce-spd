import { Component, OnInit } from '@angular/core';
import {
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  TdDataTableService,
  IPageChangeEvent
} from '@covalent/core';
import { PersonasService } from '../../services/personas.service';
import { MatDialog } from '@angular/material';
import { ModalNuevoUsuarioComponent } from './modales/modal-nuevo-usuario/modal-nuevo-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [PersonasService]
})
export class UsuariosComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'curp', label: 'CURP', sortable: true, width: 200 },
    { name: 'fullname', label: 'Nombre', filter: true},
    { name: 'email', label: '', numeric: true },
  ];

  data: any[] = []; // see json data

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  heightTable = 100;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 50;
  sortBy = 'curp';
  selectable = true;
  clickable = true;
  selectedRows: any[] = [];
  multiple = false;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    private _dataTableService: TdDataTableService,
    private _personas: PersonasService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._personas.getPersona().subscribe(
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
  openDialog() {
    this.dialog.open(ModalNuevoUsuarioComponent, {
      width: '100%',
      maxWidth: '500px'
    });
  }
}
