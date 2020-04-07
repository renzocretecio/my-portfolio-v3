import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
import { Title, Meta } from '@angular/platform-browser'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPageComponent implements OnInit {
  pageTitle: string
  constructor(private router: Router, private title: Title, private meta: Meta) { }
  homeBtn() {
    this.router.navigate(['/projects'])
    // $('#next').addClass('next-btn')
    // $('#next').removeClass('fadeOutRight')
  }

  ngOnInit() {
    this.pageTitle = 'Renzo R. Cretecio | Web developer'
    this.title.setTitle(this.pageTitle)
    this.meta.addTag({ description: " I'm a PH based Web designer and Developer focused on user-friendly interface" })
  }

}
