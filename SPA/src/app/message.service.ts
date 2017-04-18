import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Message } from './message';

@Injectable()
export class MessageService {
    private messageUrl = 'http://localhost:50071/api/';

    constructor(private http: Http) {}

    getMessage(id: number): Promise<Message> { 
        return this.http.get(this.messageUrl + 'message/' + id)
            .toPromise()
            .then(response => response.json() as Message)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}