import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddPrdComponent } from './add-prd/add-prd.component';
import { EditPrdComponent } from './edit-prd/edit-prd.component';
import { ShowPrdComponent } from './show-prd/show-prd.component';
import { PrdService } from  './prd.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddPrdComponent,
    EditPrdComponent,
    ShowPrdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PrdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
