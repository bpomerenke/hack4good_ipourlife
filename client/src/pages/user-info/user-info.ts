import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  first_name: string = ""
  last_name: string = ""
  phone_number: string = ""
  token_id: string = null

  constructor(private loginProvider: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  get User() {
    return this.loginProvider.currentUser;
  }

  canCreateInvite() {
    return this.first_name.length != 0 && this.last_name.length != 0 && this.phone_number.length != 0;
  }

  createToken() {
    this.loginProvider
      .createToken({first_name: this.first_name, last_name: this.last_name, phone_number: this.phone_number})
      .then(token_id => this.token_id = token_id)
      .catch(() => {});
  }
}
