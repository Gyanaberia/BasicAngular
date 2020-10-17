import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,Outlabroute} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,//include header
    Outlabroute//included router ,which includes form and contact page
  ],
  imports: [
    BrowserModule,//no idea
    AppRoutingModule,//routing option
    ReactiveFormsModule,//for creating form
    HttpClientModule//for http requests
  ],
  providers: [ServerService],//to enable get service from the url
  bootstrap: [AppComponent]
})
export class AppModule { }
