import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapViewPage } from './map-view.page';
import { SharedModule } from '../shared.module';
import { TabsModules } from '../tabs.module';
const routes: Routes = [
  {
    path: '',
    component: MapViewPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TabsModules,
    RouterModule.forChild(routes)
  ],
  declarations: [MapViewPage]
})
export class MapViewPageModule { }
