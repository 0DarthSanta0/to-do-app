import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './app-spinner.component.html',
    styleUrls: ['./app-spinner.component.scss']
})
export class AppSpinnerComponent {
    @Input() strokeWidth: string = '2';
}
