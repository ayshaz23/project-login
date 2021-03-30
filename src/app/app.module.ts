import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { MainModule } from './main/main.module';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

// import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => MainModule) ,
  },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule,
    MainModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
