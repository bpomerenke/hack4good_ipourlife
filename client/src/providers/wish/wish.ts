import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ResourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WishProvider {
  private cache: Wish[] = null;

  constructor(public http: Http) {
    console.log('Hello WishProvider Provider');
  }

  getWishes(): Promise<Wish[]> {
    if (this.cache == null) {
      return this.http
        .get("https://arcane-citadel-61571.herokuapp.com/api/wishes", {withCredentials: true})
        .toPromise()
        .then(x => {
          this.cache = x.json();
          return this.cache;
        });
    }
    return Promise.resolve(this.cache);
  }

  postWishes(wish: Wish): Promise<Response> {
    return this.http.post("https://arcane-citadel-61571.herokuapp.com/api/wishes", wish, {withCredentials: true}).toPromise();
  };
}

export interface Wish {
  name: string;
}
