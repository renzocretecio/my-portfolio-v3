import { Component, OnInit } from '@angular/core';
import { slideInAnimation, fader, } from '../route-animation';
import * as $ from 'jquery'
import { Title, Meta } from '@angular/platform-browser'
import { from } from 'rxjs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  animations: [fader]
})
export class MainComponent implements OnInit {

  date = new Date()
  year = this.date.getFullYear()


  burgerToggle() {
    $('.hamburger').click(() => {
      $('.btn-list').toggleClass('active')
    })

    $('.btn-list a').click(() => {
      $('.btn-list').toggleClass('active')
    })
  }

  constructor() { }

  ngOnInit() {

    this.burgerToggle()
  }

}
