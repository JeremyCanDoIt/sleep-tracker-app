import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlllogsPageRoutingModule } from './alllogs-routing.module';

import { AlllogsPage } from './alllogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlllogsPageRoutingModule
  ],
  declarations: [AlllogsPage]
})
export class AlllogsPageModule {}
