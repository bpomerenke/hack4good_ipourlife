import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginType: string = "existing";
  username: string = "";
  password: string = "";
  token: string = "";
  email: string = "";
  tokenValid: boolean = false;
  submitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("constructor login")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loadApp() {
    this.navCtrl.push(TabsPage);
  }

  checkToken() {
    this.submitted = true;
    // tokenProvider.check(this.token).then(()=>{
    if (this.token.length == 4) {
      this.tokenValid = true;
    }
    // });
  }

  createUserAndLogIn() {

  }

  get submitButtonColor(): string {
    return !this.tokenValid && !this.submitted ? 'default' : 'danger';
  }
}
