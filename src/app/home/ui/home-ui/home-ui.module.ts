import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUiComponent } from './home-ui.component';



@NgModule({
  declarations: [
    HomeUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeUiComponent
  ]
})
export class HomeUiModule { }
