import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {

  constructor(private router: Router) { }
  nextBtn() {
    this.router.navigate(['/about'])
  }
  ngOnInit() {
  }

}
