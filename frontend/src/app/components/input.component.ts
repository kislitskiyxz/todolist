import {Component, EventEmitter, Output} from '@angular/core';
import { CreateService } from '../services/create.service';

@Component({
    selector: 'input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Output() updated = new EventEmitter<any>();
    userInput;
    constructor(private createService: CreateService) {

    }

    sendData(data) {
        this.createService.updateList(data).subscribe((idObj) => {
           const todo = {value: data, id: idObj.id};
           this.updated.emit(todo);
        });
        console.log('sending ');
        console.log(data);
    }
}

