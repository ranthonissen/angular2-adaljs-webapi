import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<a routerLink="/">HOME</a> <a routerLink="messages">Messages</a>
    <h1>Hello {{name}}</h1>
    <router-outlet></router-outlet>`
})
export class AppComponent { 
  name = 'Angular'; 
}
