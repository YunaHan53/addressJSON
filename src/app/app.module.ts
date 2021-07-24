import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddresstableComponent } from './components/addresstable/addresstable.component';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { AddressService } from './services/address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddresstableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
