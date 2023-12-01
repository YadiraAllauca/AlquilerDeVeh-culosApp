export class Alquiler {
  _id?: string;
  cliente: string;
  empleado: string;
  fecha?: string;
  placa: string;
  dias: number;
  constructor(cliente: string, empleado: string,  placa: string, dias: number) {
    this.cliente = cliente;
    this.empleado = empleado;
    this.placa = placa;
    this.dias = dias;
  }
}
