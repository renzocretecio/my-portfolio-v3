import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactForm } from './ObjectModel'
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery'
import { ServiceService } from '../service.service'
import { MetaServiceService } from '../../meta-service.service'
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactForm: ContactForm
  name: string = ''
  email: string = ''
  message: string = ''
  isSent: boolean = false

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    message: ['']
  })


  setContactData() {
    this.contactForm = new ContactForm();
    this.contactForm.name = this.name
    this.contactForm.emailAddress = this.email
    this.contactForm.message = this.message
  }

  onSubmit() {
    this.name = this.form.controls['name'].value
    this.email = this.form.controls['email'].value
    this.message = this.form.controls['message'].value
    this.setContactData()

    var data = this.contactForm
    if (this.form.invalid) {
      $('.form-control').addClass('has-error')

    } else {
      this.service.postData(data).subscribe(data => {

      })
      this.isSent = true
      this.form.reset()
    }

  }
  constructor(private http: HttpClient, private fb: FormBuilder, private service: ServiceService, private meta: MetaServiceService) {
    this.meta.setupRouting();
  }

  ngOnInit() {


  }

}
