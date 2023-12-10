import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableofelementsPage } from './tableofelements.page';

const routes: Routes = [
  {
    path: '',
    component: TableofelementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableofelementsPageRoutingModule {}
