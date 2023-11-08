import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from "primeng/table";
import { DROPDOWN_NAMES } from "../../constants/tables-names";
import { DropdownInterface } from "../../models/dropdown.interface";

@Component({
    selector: 'app-to-do-table',
    templateUrl: './to-do-table.component.html',
    styleUrls: ['./to-do-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoTableComponent<T> implements OnInit {

    @Input() set tableData(dataList: T[] | null) {
        if (dataList) {
            this.dataList = dataList;
        }
    };

    public get tableData(): T[] {
        return this.dataList;
    }

    @Input() globalFilteredFields: string[] = [];
    @Input() columnNames: { [key: string]: string } = {};
    @Input() scrollHeight: number = 250;
    @Input() virtualRowHeight: number = 30;
    @Input() isScrollable: boolean = true;
    @Input() isVirtualScroll: boolean = true;
    @Output() updated = new EventEmitter<void>();
    @ViewChild('table') table: Table | null = null;
    @ViewChild('search') search = null;
    public searchValue: string = ""
    public selectedStatus: DropdownInterface | null = null
    public dropdownValue: DropdownInterface[] = DROPDOWN_NAMES

    private dataList: T[] = [];


    public resetTableSettings() {
        this.table?.clear();
        this.searchValue = ""
        this.selectedStatus = null
    }

    public updateTable() {
        this.resetTableSettings()
        this.updated.emit();
    }

    public columnNamesKey: string[] = [];

    public ngOnInit(): void {
        this.columnNamesKey = Object.keys(this.columnNames);
    }
}
