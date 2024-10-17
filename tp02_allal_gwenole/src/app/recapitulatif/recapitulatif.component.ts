import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recapitulatif',
    templateUrl: './recapitulatif.component.html',
    styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
    formData: any;

    ngOnInit() {
        const data = localStorage.getItem('formData');
        this.formData = data ? JSON.parse(data) : {};
    }
}
