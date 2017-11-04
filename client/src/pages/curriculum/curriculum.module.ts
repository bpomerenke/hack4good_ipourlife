import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurriculumPage } from './curriculum';

@NgModule({
  declarations: [
    CurriculumPage,
  ],
  imports: [
    IonicPageModule.forChild(CurriculumPage),
  ],
})
export class CurriculumPageModule {}
