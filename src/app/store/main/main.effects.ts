import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToDoService } from "../../shared/services/to-do.service";
import { getTodos, getTodosFail, getTodosSuccess } from "./main.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class MainEffects {

    public todosList$ = createEffect(() => this.actions$.pipe(
        ofType(getTodos),
        switchMap(() => this.todosService.getTodos()),
        map((todosList) => getTodosSuccess({todosList})),
        catchError((errorResponse: HttpErrorResponse) => of(getTodosFail({errors: errorResponse.error})))
    ));

    constructor(
        private actions$: Actions,
        private store: Store,
        private todosService: ToDoService,
    ) {
    }
}