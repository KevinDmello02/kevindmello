import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUiComponent } from './about-ui.component';



@NgModule({
  declarations: [
    AboutUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUiComponent
  ]
})
export class AboutUiModule { }
