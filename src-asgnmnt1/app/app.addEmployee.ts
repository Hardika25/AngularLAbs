import { Component,Input } from '@angular/core';

@Component({
    selector: 'add-emp',
    templateUrl: 'app.addemp.html'
})

export class AddEmployeeComponent {
    @Input()
    inchild:any[];
 }