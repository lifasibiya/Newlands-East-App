import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSportPage } from './add-sport.page';
import { AddEventModule } from 'src/app/shared-modules/add-event.module';

const routes: Routes = [
  {
    path: '',
    component: AddSportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AddEventModule
  ],
  declarations: [AddSportPage]
})
export class AddSportPageModule {}
