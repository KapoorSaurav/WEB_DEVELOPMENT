import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { OfficeComponent } from './office/office.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  {
    path:'bank', component:BankComponent
  },
  {
    path:'office',component: OfficeComponent
  },
  {
    path:'school', component: SchoolComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
