import { Component, OnInit } from '@angular/core';
import { MetaServiceService } from '../../meta-service.service'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pageTitle: string
  constructor(private meta: MetaServiceService) {
    this.meta.setupRouting();
  }


  ngOnInit() {

  }

}
