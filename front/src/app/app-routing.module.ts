import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { LoansListComponent } from './category/loans-list/loans-list.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'clients', component: CategoryListComponent },
  { path: 'loans', component: LoansListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
