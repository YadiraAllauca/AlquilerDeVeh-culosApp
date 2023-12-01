import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'all-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit {
  group!: FormGroup;
  constructor(
    private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }
  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      cliente: new FormControl(this.data?.cliente, Validators.required),
      empleado: new FormControl(this.data?.empleado, Validators.required),
      placa: new FormControl(this.data?.placa, Validators.required),
      dias: new FormControl(this.data?.dias, Validators.required),
    });
  }
  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
