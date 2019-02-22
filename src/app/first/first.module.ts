import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicModule } from '@ionic/angular';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpModule,
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
