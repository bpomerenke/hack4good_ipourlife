import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ResourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResourceProvider {
  private cache: Resource[] = null;

  constructor(public http: Http) {
    console.log('Hello ResourceProvider Provider');
  }

  getResources(): Promise<Resource[]> {
    if (this.cache == null) {
      return this.http
        .get("https://arcane-citadel-61571.herokuapp.com/api/resources", {withCredentials: true})
        .toPromise()
        .then(x => {
          this.cache = x.json();
          return this.cache;
        });
    }
    return Promise.resolve(this.cache);
  }
}

export interface Resource {
  name: string;
  description: string;
  email: string;
  phone: string;
  image: string;
  pinned?: boolean;
}
