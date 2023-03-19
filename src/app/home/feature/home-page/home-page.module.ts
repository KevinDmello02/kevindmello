import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { NavigationBarModule } from '../../ui/navigation-bar/navigation-bar.module';
import { HomeUiModule } from '../../ui/home-ui/home-ui.module';
import { AboutUiModule } from '../../ui/about-ui/about-ui.module';
import { SkillsUiModule } from '../../ui/skills-ui/skills-ui.module';
import { ExperienceUiModule } from '../../ui/experience-ui/experience-ui.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NavigationBarModule,
    HomeUiModule,
    AboutUiModule,
    SkillsUiModule,
    ExperienceUiModule
  ]
})
export class HomePageModule { }
