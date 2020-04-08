import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './main-component/main-component.component';
import { LandingPageComponent } from './content/landing-page/landing-page';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContactMeComponent } from './content/contact-me/contact-me.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', component: LandingPageComponent, data: {
          animation: 'first-page',
          title: 'Web Developer',
          description: "Hi, I'm Renzo, PH based Web designer and Developer focused on user-friendly interface",
          seo: { title: "Web developer", description: "Hi, I'm Renzo, PH based Web designer and Developer focused on user-friendly interface", seo: { title: "About Renzo", description: "Hi, I'm Renzo, PH based Web designer and Developer focused on user-friendly interface", shareImg: '../assets/img/Logo2.jpg' } }

        }
      },
      {
        path: 'about', component: AboutMeComponent, data: {
          animation: 'third-page',
          title: 'About',
          description: "I'm a web development enthusiast that is armed with experience, learning, and passion. ",
          seo: { title: "About me", description: "I'm a web development enthusiast that is armed with experience, learning, and passion", shareImg: '../assets/img/Logo2.jpg' }
        }
      },
      {
        path: 'projects', component: ProjectsComponent, data: {
          animation: 'second-page',
          title: 'Projects',
          description: "I'm a PH based Web designer and Developer focused on user-friendly interface",
          seo: { title: "Projects", description: "I'm a PH based Web designer and Developer focused on user-friendly interface", shareImg: '../assets/img/Logo2.jpg' }
        }
      },
      {
        path: 'contact', component: ContactMeComponent, data: {
          animation: 'fourth-page',
          title: 'Contact',
          description: "If you want to get in touch or talk about a project, send me a message or send an email to renzocretecio@gmail.com",
          seo: { title: "Contact me", description: "If you want to get in touch or talk about a project, send me a message or send an email to renzocretecio@gmail.com", shareImg: '../assets/img/Logo2.jpg' }
        }
      }
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
