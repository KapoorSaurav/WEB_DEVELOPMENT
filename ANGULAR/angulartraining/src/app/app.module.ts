import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { BankComponent } from './bank/bank.component';
import { OfficeComponent } from './office/office.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    BankComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
