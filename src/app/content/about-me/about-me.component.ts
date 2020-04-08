import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from '../../meta-service.service'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  constructor(private meta: MetaServiceService) {
    this.meta.setupRouting();
  }

  ngOnInit() {

  }

}
