import { MainStateInterface } from "../../shared/models/main.state.interface";
import { createReducer, on } from "@ngrx/store";
import { getTodos, getTodosFail, getTodosSuccess } from "./main.actions";

const initialState: MainStateInterface = {
    isLoading: false,
    todosList: [],
    errors: null,
}

export const mainReducers = createReducer(
    initialState,
    on(
        getTodos, (state): MainStateInterface => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        getTodosSuccess, (state, {todosList}): MainStateInterface => ({
            ...state,
            isLoading: false,
            todosList,
            errors: null,
        })
    ),
    on(
        getTodosFail, (state, {errors}): MainStateInterface => ({
            ...state,
            isLoading: false,
            errors,
        })
    ),
)