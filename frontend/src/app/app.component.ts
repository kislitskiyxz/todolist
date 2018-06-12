import { Component, OnInit } from '@angular/core';
import { CreateService } from './services/create.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  received: any = [];
  cleared;
    changeData(data) {
      this.updateList(data);
    }

    constructor(private createService: CreateService){}

    getList() {
        console.log('GOT RESPONSE');
         this.createService.getList().subscribe((data) => {
           console.log(data);
           this.received = data;
         });
    }
    updateList(data) {
     this.received.push(data);
     console.log(this.received);
    }




    ngOnInit() {
      this.getList();
    }

}
