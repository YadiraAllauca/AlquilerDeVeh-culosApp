import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';
import { AlquilarService } from '../../services/alquilar.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormUpdateComponent } from '../form-update/form-update.component';
import { FormComponent } from '../form/form.component';
import { Alquiler } from '../../models/alquiler';
@Component({
  selector: 'all-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(
    private alquilarService: AlquilarService,
    private dialog: MatDialog
  ) {
    this.loadAlquileres();
  }
  ngOnInit(): void {}
  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'cliente', title: 'CLIENTE' },
    { field: 'empleado', title: 'EMPLEADO' },
    { field: 'fecha', title: 'FECHA' },
    { field: 'placa', title: 'PLACA' },
    { field: 'dias', title: 'DÍAS' },
  ];
  data: any[] = [];
  totalRecords = this.data.length;
  loadAlquileres() {
    this.alquilarService.loadAlquileres().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  delete(id: any = null) {
    this.alquilarService.deleteAlquiler(id).subscribe(() => {
      this.loadAlquileres();
    });
  }
  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: row,
    };

    const reference: MatDialogRef<FormUpdateComponent> = this.dialog.open(
      FormUpdateComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const agencia = { ...response };
        this.alquilarService
          .updateAlquiler(response.id, agencia)
          .subscribe(() => {
            this.loadAlquileres();
          });
      }
    });
  }
  records: any[] = [];
  search: any;
  loadBusqueda() {
    this.alquilarService.loadAlquileres().subscribe(
      (data) => {
        this.records = data;
        this.data = [];
        for (let i = 0; i < this.records.length; i++) {
          if (
            this.records[i].placa
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            this.data.push(this.records[i]);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // alquiler: Alquiler = {
  //   cliente: '', empleado: '', fecha: '', placa: '', dias: 1
  // }
  // edit(id: any) {
  //   this.alquilarService.loadAlquiler(id).subscribe(
  //     (data) => {
  //       this.alquiler = data;
  //       const formu = new FormComponent(this.alquilarService);
  //       formu.cargarDatos(this.alquiler, id);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
