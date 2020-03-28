import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }
  homeBtn() {
    this.router.navigate(['/projects'])
    // $('#next').addClass('next-btn')
    // $('#next').removeClass('fadeOutRight')
  }

  ngOnInit() {
  }

}
