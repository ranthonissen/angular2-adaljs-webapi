import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

var routeConfig = [
  {
    path: 'messages',
    component: MessageComponent
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routeConfig), HttpModule ],
  declarations: [ AppComponent, MessageComponent ],
  providers: [ MessageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
