import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSpinnerComponent } from './app-spinner.component';
import { ProgressSpinnerModule } from "primeng/progressspinner";


@NgModule({
    declarations: [
        AppSpinnerComponent
    ],
    exports: [
        AppSpinnerComponent
    ],
    imports: [
        CommonModule,
        ProgressSpinnerModule
    ]
})
export class AppSpinnerModule {}
