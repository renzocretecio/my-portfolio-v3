import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactForm } from './ObjectModel'
import * as moment from 'moment';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactFormObject: ContactForm
  name: string = ""
  email: string = ''
  message: string = ''
  date: string = ''
  time: string = ''
  statusFlag: string = ''

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['']

  })
  setContactData() {
    this.contactFormObject = new ContactForm()
    this.contactFormObject.name = this.name
    this.contactFormObject.emailAdress = this.email
    this.contactFormObject.message = this.message
    this.contactFormObject.date = this.date
    this.contactFormObject.time = this.time
    this.contactFormObject.statusFlag = this.statusFlag
  }
  onSubmit() {
    this.name = this.contactForm.controls['name'].value
    this.email = this.contactForm.controls['email'].value
    this.message = this.contactForm.controls['message'].value
    this.date = moment(new Date).format('MMM DD, YYYY')
    this.time = moment(new Date).format('h:mm:ss a')
    this.statusFlag = 'Active'
    this.setContactData()
    var dataObject = this.contactFormObject

    console.log(JSON.stringify(dataObject))
  }
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

}
