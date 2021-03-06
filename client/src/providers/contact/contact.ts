import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Contact } from '../../models/Contact';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  constructor(public http: Http) {
  }

  createContact(contact: Contact): Promise<any>{
    console.log("sending: ", contact);
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/contacts", contact, {withCredentials: true})
                  .toPromise();                  
  }

  getAll(): Promise<Contact[]>{
    return this.http.get("https://arcane-citadel-61571.herokuapp.com/api/contacts", {withCredentials: true}).toPromise().then((x: Response) => x.json());;
  }

}
