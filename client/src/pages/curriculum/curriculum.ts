import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user'
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
  constructor(private userProvider: UserProvider){

  }

  getUserType():string {
    return this.userProvider.currentUser.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurriculumPage');
  }
}
