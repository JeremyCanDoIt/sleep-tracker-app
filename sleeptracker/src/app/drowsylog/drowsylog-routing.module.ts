import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrowsylogPage } from './drowsylog.page';

const routes: Routes = [
  {
    path: '',
    component: DrowsylogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrowsylogPageRoutingModule {}
