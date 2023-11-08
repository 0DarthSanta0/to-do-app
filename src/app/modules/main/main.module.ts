import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AppSpinnerModule } from "../../shared/components/app-spinner/app-spinner.module";
import { ToDoTableModule } from "../../shared/components/to-do-table/to-do-table.module";
import { MainRoutingModule } from "./main-routing.module";


@NgModule({
    declarations: [
        ToDoListComponent
    ],
    imports: [
        CommonModule,
        AppSpinnerModule,
        ToDoTableModule,
        MainRoutingModule,
    ],
})
export class MainModule {}
