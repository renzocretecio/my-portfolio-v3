import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private router: Router) { }
  nextBtn() {
    this.router.navigate(['/'])
  }

  prevBtn() {
    this.router.navigate(['/projects'])
  }
  ngOnInit() {
  }

}
