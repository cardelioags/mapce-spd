import { Component, OnInit } from '@angular/core';
import {
  TdDataTableService,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  ITdDataTableColumn
} from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { PersonasService } from '../../services/personas.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-importador',
  templateUrl: './importador.component.html',
  styleUrls: ['./importador.component.css'],
  providers: [PersonasService]
})
export class ImportadorComponent implements OnInit {
  public data: any = [];
  public contNuevos: Number = 0;
  public contActualizados: Number = 0;
  public files: any;
  public testData = { curp: 'CARD830331QPA', nombre: 'DAVID OMAR' };
  columns: ITdDataTableColumn[] = [];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize= 50;
  sortBy= '';
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  selectable: Boolean = true;
  clickable: Boolean = true;
  multiple: Boolean = true;

  selectEvent($e) {
    console.log($e);
    console.log(this.files[0]);
  }
  uploadEvent($e) {
    console.log($e.file);
  }
  onFileChange(evt) {
    console.log(evt);
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.data);
      const cols: any[] = [];
      const data: any[] = [];
      for (const i in this.data[0]) {
        if (this.data[0].hasOwnProperty(i)) {
          cols.push({
            name: this.data[0][i],
            label: this.data[0][i],
            width: { min: 200, max: 300 }
          });
        }
      }
      for (let i = 1; i <= this.data.length; i++) {
        data.push({});
        for (const j in this.data[i]) {
          if (this.data[i].hasOwnProperty(j)) {
            data[i - 1][this.data[0][j]] = this.data[i][j];
          }
        }
      }
      console.log(data);
      this.columns = cols;
      this.data = data;
      this.filter();
    };
    reader.readAsBinaryString(target.files[0]);
  }

  constructor(
    private _dataTableService: TdDataTableService,
    private _personas: PersonasService
  ) {}

  ngOnInit(): void {
    this.filter();
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
        return (
          (column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false)
        );
      })
      .map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this._dataTableService.filterData(
      newData,
      this.searchTerm,
      true,
      excludedColumns
    );
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(
      newData,
      this.fromRow,
      this.currentPage * this.pageSize
    );
    this.filteredData = newData;
  }

  pruebaCarga() {
    this._personas.upsertPersona(this.data).subscribe(res => {
      console.log(res);
    });
  }
}
