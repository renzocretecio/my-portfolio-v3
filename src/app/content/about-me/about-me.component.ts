import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
import { Title, Meta } from '@angular/platform-browser'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  pageTitle: string
  constructor(private router: Router, private title: Title, private meta: Meta) { }
  nextBtn() {
    this.router.navigate(['/'])
  }

  prevBtn() {
    this.router.navigate(['/projects'])
  }
  ngOnInit() {
    this.pageTitle = 'Renzo R. Cretecio | About'
    this.title.setTitle(this.pageTitle)
  }

}
