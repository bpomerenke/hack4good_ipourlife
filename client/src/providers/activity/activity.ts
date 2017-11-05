import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Activity } from '../../models/Activity'

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {

  constructor(public http: Http) {
    console.log('Hello ActivityProvider Provider');
  }

  getAll():Promise<Activity[]>{
    return this.http.get("https://arcane-citadel-61571.herokuapp.com/api/activities", {withCredentials:true}).toPromise().then((response)=>response.json());
  }

}
