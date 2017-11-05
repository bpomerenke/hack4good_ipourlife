import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  }

  async checkToken() {
    this.submitted = true;

    try {
      await this.loginProvider.checkToken(this.token)
      this.tokenValid = true;
    }
    catch(e) { 
      this.tokenValid = false;
    }
  }

  async createUserAndLogIn() {
    try {
      await this.loginProvider.createYouth({
        username: this.username,
        password: this.password,
        email: this.email,
        token_id: this.token
      });      
      await this.login();      
    } catch (e) {
      //duplicate username or something
    }    
  }

  async login() {
    try {
      await this.loginProvider.login({
        username: this.username,
        password: this.password
      });
      this.navCtrl.push(TabsPage);
    } catch (e) {
      //invalid credentials or something
    }
  }

  get submitButtonColor(): string {
    return !this.tokenValid && !this.submitted ? 'default' : 'danger';
  }
}
