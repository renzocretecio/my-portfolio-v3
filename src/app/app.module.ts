import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main-component/main-component.component';
import { LandingPageComponent } from './content/landing-page/landing-page';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactMeComponent } from './content/contact-me/contact-me.component';
import { ResumeComponent } from './content/resume/resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeoSocialShareDataService } from './seo-service/seo-social-share-data.service'
import { ServerJsonldModule } from './JSON-LD/server-jsonld/server-jsonld.module';
import { BrowserJsonldModule } from './JSON-LD/browser-jsonld/browser-jsonld.module';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingPageComponent,
    AboutMeComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactMeComponent,
    ResumeComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserJsonldModule,
  ],

  providers: [SeoSocialShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
