import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CreateService {
    constructor(private http: HttpClient) {
    }
    getList(){
        return this.http.get('http://localhost:3002');
    }
    updateList(data) {
        console.log('sending data');
        console.log(data);
        return this.http.post('http://localhost:3002', {mytodo: data}   );
    }
    deleteItem(index) {
        console.log('delete succeeded');
        console.log(index);
        return this.http.delete('http://localhost:3002/' + index);
    }
}