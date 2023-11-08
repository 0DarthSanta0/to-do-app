import { DropdownInterface } from "../models/dropdown.interface";

export const COLUMNS_NAMES: { [key: string]: string } = {
    'title': 'Title',
    'completed': 'Completed',
};

export const DROPDOWN_NAMES: DropdownInterface[] = [
    {
        name: 'Completed',
        status: true
    },
    {
        name: 'Uncompleted',
        status: false
    },
]