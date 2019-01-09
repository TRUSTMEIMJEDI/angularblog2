import {Component, NgModule, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class ContactComponent implements OnInit {

  name: string;
  email: string;
  number: number;
  message: string;
  captcha: string;
  captcha1: string;

  constructor() {
    this.captcha = this.generateCaptcha();
  }

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.captcha !== this.captcha1) {
      alert('Captcha is not correct.\nPlease write captcha correctly\nRemember to use CAPITAL & small letters');
    } else {
      const allInfo = `My name is ${this.name}.\nMy email is ${this.email}.\nMy phone nubmer is ${this.number}.\nMy message is ${this.message}`;
      alert(allInfo);
    }
  }
  public generateCaptcha(): string {
    const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const n = '0123456789';
    let cap_size = 5;
    const rand = function(x) {
      return Math.floor(Math.random() * x);
    };
    // Build the captcha
    let captcha = '';
    while (cap_size--) {
      // if 0 add a random alphabetic character
      if (rand(2) === 0) { captcha += a[rand(a.length)]; } else { captcha += n[rand(n.length)]; }
    }
    return captcha;
  }
}
