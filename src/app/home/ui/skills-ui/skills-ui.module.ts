import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsUiComponent } from './skills-ui.component';



@NgModule({
  declarations: [
    SkillsUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillsUiComponent
  ]
})
export class SkillsUiModule { }
