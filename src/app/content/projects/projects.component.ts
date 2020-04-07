import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pageTitle: string
  constructor(private router: Router, private title: Title, private meta: Meta) { }

  nextBtn() {
    this.router.navigate(['/about'])
  }

  prevBtn() {
    this.router.navigate(['/'])
  }
  ngOnInit() {
    this.pageTitle = 'Renzo R. Cretecio | Projects'
    this.title.setTitle(this.pageTitle)
  }

}
