import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlllogsPage } from './alllogs.page';

const routes: Routes = [
  {
    path: '',
    component: AlllogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlllogsPageRoutingModule {}
