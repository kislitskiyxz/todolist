import { Component } from '@angular/core';

@Component({
    selector: 'head-component',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent {
    title = '#TODO-List';
}