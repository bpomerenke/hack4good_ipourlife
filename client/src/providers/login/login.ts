import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  public currentUser: Person;  

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  checkToken(token: string): Promise<Response> {
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/checkToken", { token_id: token }, {withCredentials: true}).toPromise();
  }

  createYouth(user: User): Promise<Response> {
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/createYouth", user, {withCredentials: true}).toPromise();
  }

  login(user: User): Promise<Response> {
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/login", user, {withCredentials: true})
      .toPromise()
      .then((response: Response) => {
        let body = response.json();
        this.currentUser = new Person(body.user, body.person_type, body.phone_number, body.first_name, body.last_name, body.email);
        return response;
      });
  }

  createToken(tokenInfo: any): Promise<string> {
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/createToken", tokenInfo, {withCredentials: true})
      .toPromise()
      .then((x: Response) => x.json().token_id);
  }
}

export interface User {
  token_id?: string,
  username: string,
  password: string,
  email?: string
}

export class Person {
  constructor(public user: number, 
              public person_type: number, 
              public phone_number: string,
              public first_name: string,
              public last_name: string,
              public email: string
              ) {

  }

  get type(): string {
    return this.person_type == 1 ? 'Youth' : 'Coach';
  }
}