import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

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

  constructor(private userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  toggleUser(){
    let currentUser = this.userProvider.currentUser;

    if(currentUser.type == 'Youth'){
      this.userProvider.currentUser = { name: 'Janet Coach', type: 'Coach'}
    } else {
      this.userProvider.currentUser = { name: 'Joe Youth', type: 'Youth'}
    }
  }

  getName(){
    return this.userProvider.currentUser.name;
  }
  getType(){
    return this.userProvider.currentUser.type;
  }

}
