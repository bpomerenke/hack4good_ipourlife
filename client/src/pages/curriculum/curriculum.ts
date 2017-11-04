import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curriculum',
  templateUrl: 'curriculum.html',
})
export class CurriculumPage {

  private assignments : any[] = [
    {id: 1, name: "First Assignment", isCompleted: false},
    {id: 2, name: "Second Assignment", isCompleted: true},
    {id: 3, name: "Third Assignment", isCompleted: false}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurriculumPage');
  }

  getAssignments(): any[] {
    return this.assignments;
  }

}
