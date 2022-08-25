import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ShareContent/navbar/navbar.component';
import { FooterComponent } from './ShareContent/footer/footer.component';
import { HomeComponent } from './MainContent/home/home.component';
import { MenuComponent } from './MainContent/menu/menu.component';
import { AboutComponent } from './MainContent/about/about.component';
import { ContactComponent } from './MainContent/contact/contact.component';
import { MenuitemComponent } from './MainContent/menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
