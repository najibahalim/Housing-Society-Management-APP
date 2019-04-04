import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HttpModule } from '@angular/http';
import { ChooseThingComponent } from '../choose-thing/choose-thing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [ChooseThingComponent],
  declarations: [HomePage, ChooseThingComponent],
  exports: [ChooseThingComponent]
})
export class HomePageModule {}
