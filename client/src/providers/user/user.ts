import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../models/User'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  getUser(): User{
    return this.currentUser;
  }

}
