import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../route-animation';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  animations: [slideInAnimation]
})
export class MainComponent implements OnInit {

  date = new Date()
  year = this.date.getFullYear()

  constructor() { }

  ngOnInit() {
  }

}
