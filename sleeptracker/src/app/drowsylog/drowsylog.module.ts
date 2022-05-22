import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrowsylogPageRoutingModule } from './drowsylog-routing.module';

import { DrowsylogPage } from './drowsylog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrowsylogPageRoutingModule
  ],
  declarations: [DrowsylogPage]
})
export class DrowsylogPageModule {}
