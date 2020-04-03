import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactForm } from './ObjectModel'
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactFormObject: ContactForm

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['']

  })

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('name', this.contactForm.value.email)
      .append('name', this.contactForm.value.message)
    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
      res => { }
    )

  }
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  ngOnInit() {
  }

}
