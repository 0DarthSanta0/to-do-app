import { BackendErrorsInterface } from "./backend-errors.interface";

export interface MainStateInterface {
    isLoading: boolean,
    todosList: ToDoInterface[],
    errors: BackendErrorsInterface | null,
}
