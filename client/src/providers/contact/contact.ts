import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  constructor(public http: Http) {
    console.log('Hello ContactProvider Provider');
  }

  createContact(contact: any): Promise<any>{
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/contacts", contact)
                  .toPromise();                  
  }

}
