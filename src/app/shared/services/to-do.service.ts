import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { EndpointsUrl } from "../constants/endpoints";

@Injectable({
    providedIn: 'root'
})
export class ToDoService extends ApiService {
    public getTodos(): Observable<ToDoInterface[]> {
        return this.httpService.get<ToDoInterface[]>(this.api + EndpointsUrl.GET_TODOS)
    }
}
