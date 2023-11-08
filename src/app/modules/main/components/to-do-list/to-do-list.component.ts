import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, MonoTypeOperatorFunction, Observable } from "rxjs";
import { COLUMNS_NAMES } from "../../../../shared/constants/tables-names";
import { select, Store } from "@ngrx/store";
import { getTodos } from "../../../../store/main/main.actions";
import { isLoadingMainSelector, todosListSelector } from "../../../../store/main/main.selectors";
import { untilDestroyed } from "../../../../shared/functions/unsubscribe.operator";

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {

    public isLoading$: Observable<boolean> | null = null;
    public todos$: Observable<ToDoInterface[]> | null = null;

    public columnNames: { [key: string]: string } = COLUMNS_NAMES;
    public globalFilteredFields: string[] = Object.keys(COLUMNS_NAMES);

    private destroy$: MonoTypeOperatorFunction<ToDoInterface[]> = untilDestroyed();

    constructor(
        private store: Store,
    ) {
    }

    public updateTable() {
        this.selectProjects()
    }

    public ngOnInit(): void {
        this.selectProjects();
    }

    private selectProjects(): void {
        this.store.dispatch(getTodos());
        this.todos$ = this.store.pipe(
            select(todosListSelector),
            map(todos => [...todos]),
            this.destroy$
        );
        this.isLoading$ = this.store.select(isLoadingMainSelector);
    }
}
