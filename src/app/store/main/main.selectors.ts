import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MainStateInterface } from "../../shared/models/main.state.interface";

export const mainFeatureSelector = createFeatureSelector<MainStateInterface>('main');

export const isLoadingMainSelector = createSelector(
    mainFeatureSelector,
    (state: MainStateInterface) => state.isLoading
);

export const todosListSelector = createSelector(
    mainFeatureSelector,
    (state: MainStateInterface) => state.todosList
);

export const errorsSelector = createSelector(
    mainFeatureSelector,
    (state: MainStateInterface) => state.errors
);
