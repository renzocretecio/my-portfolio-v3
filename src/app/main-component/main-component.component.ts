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
      $('.btn-list').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')

    })

    $('.btn-list a').click(() => {
      $('.btn-list').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })

    $('.backdrop').click(() => {
      $('.btn-list').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })

    $('.close-btn').click(() => {
      $('.btn-list').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })
  }

  constructor() {


  }

  ngOnInit() {

    this.burgerToggle()
  }

}
