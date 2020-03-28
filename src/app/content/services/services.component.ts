import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  nextBtn() {
    this.router.navigate(['/projects'])

  }

  prevBtn() {
    this.router.navigate(['/about'])
  }

  ngOnInit() {

  }

}
