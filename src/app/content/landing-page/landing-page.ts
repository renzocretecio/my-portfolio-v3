import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaServiceService } from '../../meta-service.service'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private meta: MetaServiceService) {
    this.meta.setupRouting();
  }


  homeBtn() {
    this.router.navigate(['/projects'])
  }

  ngOnInit() {


  }

}
