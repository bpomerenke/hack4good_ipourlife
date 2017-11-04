import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public contacts: any[] = [
    {
      name: 'Mark Delaney',
      number: '417-555-5555',
      img: '../assets/imgs/coach-mark.jpeg'
    },
    {
      name: 'Stephanie Anderson',
      number: '417-581-3607',
      img: '../assets/imgs/stephanieanderson.jpg'
    },
    {
      name: 'Sherry Coker',
      number: '417-447-8884',
      img: '../assets/imgs/sherrycoker.jpeg'
    },
    {
      name: 'Greg Johnson',
      number: '602-888-0235',
      img: '../assets/imgs/gregjohnson.jpg'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  getContacts():any[]{
    return this.contacts;
  }

  call(contact: any) {
     window.location.href = `tel:${contact.number}`;
  }
}
