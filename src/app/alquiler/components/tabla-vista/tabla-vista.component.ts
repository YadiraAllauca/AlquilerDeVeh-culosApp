import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'all-tabla-vista',
  templateUrl: './tabla-vista.component.html',
  styleUrls: ['./tabla-vista.component.css'],
})
export class TablaVistaComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  columns: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((x) => x.field);
    }
  }
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach((columnDef) => {
      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }

}
