import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MainContent/about/about.component';
import { ContactComponent } from './MainContent/contact/contact.component';
import { HomeComponent } from './MainContent/home/home.component';
import { MenuComponent } from './MainContent/menu/menu.component';
import { MenuitemComponent } from './MainContent/menuitem/menuitem.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'menu', component: MenuComponent
  },
  {
    path:'menu/:id', component:MenuitemComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact', component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
