import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { LoginProvider } from '../../providers/login/login';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider) {
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
    this.loginProvider.checkToken(this.token).then((response)=>{
      console.log("response: ", response);
      this.tokenValid = true;
    }).catch(()=>{
      this.tokenValid = false;
    });
  }

  createUserAndLogIn() {

  }

  get submitButtonColor(): string {
    return !this.tokenValid && !this.submitted ? 'default' : 'danger';
  }
}
