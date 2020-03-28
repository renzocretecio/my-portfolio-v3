import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main-component/main-component.component';
import { LandingPageComponent } from './content/landing-page/landing-page';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './content/services/services.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: LandingPageComponent, data: { animation: 'first-page' } },
      { path: 'about', component: AboutMeComponent, data: { animation: 'third-page' } },
      { path: 'projects', component: ProjectsComponent, data: { animation: 'second-page' } }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: "enabled", onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  }),
    CommonModule
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
