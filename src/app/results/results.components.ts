import { Component, Input, OnChanges } from '@angular/core'

@Component({
    selector: 'app-results',
    templateUrl: './results.html',
    styleUrls: ['./results.scss'],
})

export class ResultsComponent implements OnChanges  {
    divStatus: string;
    @Input() status: string;

    ngOnChanges() {
        if (this.status) {
            this.divStatus = this.status.toLowerCase();
        }
    }

}