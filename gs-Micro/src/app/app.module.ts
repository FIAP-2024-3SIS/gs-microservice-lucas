import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { OceanApiService } from './api/ocean_api.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@NgModule({
    declarations: [],
       
    
    imports: [

      HttpClientModule,  
      FormsModule
    ],
    providers: [OceanApiService]
    
  })

  export class AppModule { }