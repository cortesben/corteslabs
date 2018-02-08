import { Component, OnInit } from '@angular/core';
import { Globals } from './../../globals';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  transitionStart: boolean;
  form: FormGroup;

  constructor(
    private globals: Globals,
    private fb: FormBuilder,
    private afdb: AngularFireDatabase) { }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    const { name, email, message } = this.form.value;
    const date = Date();
    const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
    let formRequest = { name, email, message, date, html };
    console.log(this.afdb)
    // this.afdb.list('/messages').push(formRequest);
    this.form.reset();
  }

  ngOnInit() {
    setTimeout(() => {
      this.transitionStart = this.globals.loaded;
    }, 0);
  }

}
