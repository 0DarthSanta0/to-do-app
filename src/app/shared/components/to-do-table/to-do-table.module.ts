import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoTableComponent } from './to-do-table.component';
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
    declarations: [
        ToDoTableComponent
    ],
    exports: [
        ToDoTableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        CheckboxModule,
        DropdownModule,
    ]
})
export class ToDoTableModule {}
