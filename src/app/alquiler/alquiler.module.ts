import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TablaVistaComponent } from './components/tabla-vista/tabla-vista.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { MatDialogContent } from '@angular/material/dialog';


@NgModule({
  declarations: [FormComponent, TableComponent, TablaVistaComponent, FormUpdateComponent, ],
  imports: [CommonModule, MatFormFieldModule,MatInputModule, FormsModule, MatDialogContent],
  exports: [FormComponent, TableComponent, MatFormFieldModule, MatInputModule, FormsModule,TablaVistaComponent, FormUpdateComponent, ],
})
export class AlquilerModule {}
