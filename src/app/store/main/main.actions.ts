import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./enums/main-action-types";
import { BackendErrorsInterface } from "../../shared/models/backend-errors.interface";

export const getTodos = createAction(
    ActionTypes.GET_TODOS,
)

export const getTodosSuccess = createAction(
    ActionTypes.GET_TODOS_SUCCESS,
    props<{ todosList: ToDoInterface[] }>()
)

export const getTodosFail = createAction(
    ActionTypes.GET_TODOS_FAIL,
    props<{ errors: BackendErrorsInterface }>()
)