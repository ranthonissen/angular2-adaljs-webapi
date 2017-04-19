import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { SecretService } from './secret.service';
import { RouteGuard } from './RouteGuard';
import { LoginComponent } from './login.component';
import { AdalService } from "ng2-adal/core";

var routeConfig = [
  {
    path: 'messages',
    component: MessageComponent,
    canActivate: [RouteGuard]
  },
  { path: 'logout', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routeConfig), HttpModule ],
  declarations: [AppComponent, MessageComponent, LoginComponent ],
  providers: [ MessageService, SecretService, AdalService, RouteGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
