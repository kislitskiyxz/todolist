import {Component, Input, OnInit} from '@angular/core';
import {CreateService} from '../services/create.service';


@Component({
    selector: 'list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
    @Input() list = [];
    constructor(private createService: CreateService){}

    ngOnInit() {
        console.log(this.list);
    }
    deleteItem(id) {
        this.createService.deleteItem(id).subscribe(() => {
        });
        let index = this.list.findIndex(function(todo){
            return todo.id === parseInt(id);
        })
        if (index !== -1) this.list.splice(index, 1);
    }
}