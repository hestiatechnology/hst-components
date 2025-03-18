import { Component, computed, Input, input, viewChild } from "@angular/core";
import { MatTableModule, MatTable } from "@angular/material/table";

export interface ColumnsType {
  field: string;
  header: string;
  hide?: boolean;
  disabled?: boolean;
  sortable?: boolean | string;
  type?:
    | "tag"
    | "button"
    | "link"
    | "image"
    | "boolean"
    | "number"
    | "currency"
    | "percent"
    | "date"
    | "select";
  showExpand?: boolean;
  description?: string;
}

@Component({
  selector: "hst-datagrid",
  imports: [MatTableModule],
  templateUrl: "./datagrid.component.html",
  styleUrl: "./datagrid.component.css",
})
export class DatagridComponent<T> {
  readonly table = viewChild.required<MatTable<Element>>("table");

  readonly data = input<T[]>([]);
  /* @Input({ required: true }) data!: T[];
  @Input({ required: true }) columns!: ColumnsType[]; */
  readonly columns = input<ColumnsType[]>([]);

  displayedColumns = computed<string[]>(() => {
    // Change to string[]
    return this.columns()
      .filter((col) => col.hide !== true)
      .map((col) => col.field); // Extract only the 'field' (column name)
  });
}
