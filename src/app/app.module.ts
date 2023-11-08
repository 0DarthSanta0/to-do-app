import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducers } from "./store/main/main.reducer";
import { MainEffects } from "./store/main/main.effects";
import { ToDoService } from "./shared/services/to-do.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot({main: mainReducers}),
        EffectsModule.forRoot([MainEffects])
    ],
    providers: [
        ToDoService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
