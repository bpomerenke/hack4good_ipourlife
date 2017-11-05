import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login'
/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-curriculum',
  templateUrl: 'curriculum.html',
})

export class CurriculumPage {
  constructor(private loginProvider: LoginProvider){

  }

  getUserType():string {
    return this.loginProvider.currentUser.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurriculumPage');
  }
}
