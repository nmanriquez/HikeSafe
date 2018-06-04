import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { HikerInfoComponent } from './hiker-info/hiker-info.component';
import { HikeComponent } from './hike/hike.component';
import { SearchComponent } from './search/search.component';
import { HikeService } from './hike-service.service';

@NgModule({
  declarations: [
    AppComponent, 
    HikerInfoComponent, 
    HikeComponent, 
    SearchComponent],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    routing],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, HikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
