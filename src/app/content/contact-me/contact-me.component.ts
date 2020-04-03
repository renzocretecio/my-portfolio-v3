import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactForm } from './ObjectModel'
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import * as $ from 'jquery'
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
    $('#contact').on('click', () => {
      $('#submit-form').submit()
    })
  }

  // onSubmit() {
  //   const body = new HttpParams()
  //     .set('form-name', 'contact')
  //     .append('name', this.contactForm.value.name)
  //     .append('name', this.contactForm.value.email)
  //     .append('name', this.contactForm.value.message)
  //   this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
  //     res => { },
  //     err => {
  //       if (err instanceof ErrorEvent) {
  //         //client side error
  //         alert("Something went wrong when sending your message.");
  //         console.log(err.error.message);
  //       } else {
  //         //backend error. If status is 200, then the message successfully sent
  //         if (err.status === 200) {
  //           alert("Your message has been sent!");
  //         } else {
  //           alert("Something went wrong when sending your message.");
  //           console.log('Error status:');
  //           console.log(err.status);
  //           console.log('Error body:');
  //           console.log(err.error);
  //         };
  //       };
  //     }
  //   )

  // }
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }

  ngOnInit() {
  }

}
