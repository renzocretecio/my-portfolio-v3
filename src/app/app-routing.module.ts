import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main-component/main-component.component';
import { TableOfContentsComponent } from './content/table-of-contents/table-of-contents.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: TableOfContentsComponent, data: { animation: 'first-page' } },
      { path: 'about', component: AboutMeComponent, data: { animation: 'second-page' } },
      { path: 'projects', component: ProjectsComponent, data: { animation: 'third-page' } }
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
