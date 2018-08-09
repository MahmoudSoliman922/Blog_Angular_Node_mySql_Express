import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { MypostsComponent } from './myposts/myposts.component';
import { GlobalpostsComponent } from './globalposts/globalposts.component';
import { CrudRequestsService } from './crud-requests.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatepostComponent,
    MypostsComponent,
    GlobalpostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CrudRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
