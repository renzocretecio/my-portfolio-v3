import { Component, OnInit } from '@angular/core';
import { slideInAnimation, fader, } from '../route-animation';
import * as $ from 'jquery'

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
      $('.links-wrapper').toggleClass('open')
    })

    $('.btn-list a').click(() => {
      $('.links-wrapper').toggleClass('open')
    })

    $('.backdrop').click(() => {
      $('.links-wrapper').toggleClass('open')
    })

    $('.close-btn').click(() => {
      $('.links-wrapper').toggleClass('open')
    })
  }

  constructor() {


  }

  ngOnInit() {

    this.burgerToggle()
  }

}
