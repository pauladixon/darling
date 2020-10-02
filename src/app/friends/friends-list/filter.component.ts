import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'filter',
    template: `
        Filter: <input type='text' />
        `
})
export class FilterComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        
    }
}