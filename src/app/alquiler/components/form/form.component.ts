import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Alquiler } from '../../models/alquiler';
import { AlquilarService } from '../../services/alquilar.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'all-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  alquiler: Alquiler = {
    cliente: '',
    empleado: '',
    placa: '',
    dias: 1,
  };
  // id_i = '';
  constructor(private alquilarService: AlquilarService) {}

  ngOnInit(): void {}
  save() {
    if (this.alquiler.cliente == '' ||
      this.alquiler.empleado == '' ||
      this.alquiler.placa == ''
    ) {
      window.alert('Llene todos los campos');
    } else {
          this.alquilarService.addAlquiler(this.alquiler).subscribe(() => {
      window.location.reload();
    });
    }
  }
  // save() {
  //   var i= <HTMLInputElement>document.getElementById('i');
  //   this.id_i = i.value;
  //   console.log(this.id_i);
  //   if (this.id_i !== '') {
  //     this.getData();
  //     console.log(this.alquiler);
  //     this.alquilarService
  //       .updateAlquiler(this.id_i, this.alquiler)
  //       .subscribe(() => {
  //         window.location.reload();
  //       });
  //   } else {
  //     this.alquilarService.addAlquiler(this.alquiler).subscribe(() => {
  //       window.location.reload();
  //     });
  //   }
  // }

  // cargarDatos(reg: Alquiler, id: string) {
  //   console.log(reg);
  //   var cliente = <HTMLInputElement>document.getElementById('cliente');
  //   cliente.value = reg.cliente;
  //   var empleado = <HTMLInputElement>document.getElementById('empleado');
  //   empleado.value = reg.empleado;
  //   var placa = <HTMLInputElement>document.getElementById('placa');
  //   placa.value = reg.placa;
  //   var dias = <HTMLInputElement>document.getElementById('dias');
  //   this.alquiler.dias = 1;
  // }
  // getData() {
  //   var cliente = <HTMLInputElement>document.getElementById('cliente');
  //   this.alquiler.cliente = cliente.value;
  //   var empleado = <HTMLInputElement>document.getElementById('empleado');
  //   this.alquiler.empleado = empleado.value;
  //   var placa = <HTMLInputElement>document.getElementById('placa');
  //   this.alquiler.placa = placa.value;
  //   var dias = <HTMLInputElement>document.getElementById('dias');
  //   this.alquiler.dias = 1;
  // }
  reload() {
    window.location.reload();
  }
}
