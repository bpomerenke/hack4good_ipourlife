import { Component } from '@angular/core';
import { ContactProvider } from '../../providers/contact/contact';

import { Contact } from '../../models/Contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  isAddingContact: boolean = false;
  public contacts: Contact[] = [];

  constructor(private contactProvider: ContactProvider){

  }

  ionViewDidLoad(){
    this.contactProvider.getAll().then((contacts)=>{
      this.contacts = contacts;
    });
  }
  
  getContacts():Contact[]{
    return this.contacts;
  }

  call(contact: any) {
     window.location.href = `tel:${contact.number}`;
  }

  add() {
    this.isAddingContact = true;
  }

  contactCreated($event){
    this.isAddingContact = false;
    this.contacts.push($event);
  }

  contactCancel(){
    this.isAddingContact = false;
  }
}
