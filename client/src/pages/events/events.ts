import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  isAddingEvent: boolean = false;

  public events:any[] = [
    {name: 'Hack4Good', date: 'Nov 4', month: 'November 2017', favorite: true},
    {name: 'Family Style Dinner', date: 'Nov 14', month: 'November 2017', favorite: false},
    {name: 'Office Closed', date: 'Dec 23-26', month: 'December 2017', favorite: false},
    {name: 'Event A', date: 'Jan 17', month: 'January 2018', favorite: true},
    {name: 'Event B', date: 'Jan 23', month: 'January 2018', favorite: false},
    {name: 'Event C', date: 'Jan 28', month: 'January 2018', favorite: false},
    {name: 'Event D', date: 'Feb 3', month: 'February 2018', favorite: true},
    {name: 'Event E', date: 'Feb 11', month: 'February 2018', favorite: false},
    {name: 'Event F', date: 'Mar 17', month: 'March 2018', favorite: true},
    {name: 'Event G', date: 'Apr 2', month: 'April 2018', favorite: false},
    {name: 'Event H', date: 'Apr 8-10', month: 'April 2018', favorite: false},
    {name: 'Event I', date: 'Apr 23', month: 'April 2018', favorite: false},
    {name: 'Event J', date: 'Apr 25', month: 'April 2018', favorite: true},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getEvents():any{
    let months = [];

    for(let event of this.events){
      let foundMonth = months.filter(m=>m.name == event.month);
      if(foundMonth.length == 0){
        months.push({name: event.month, events: [event]});
      }
      else{
        foundMonth[0].events.push(event);
      }
    }

    return months;
  }

  toggleFavorite(event: any){
    event.favorite = !event.favorite;
  }

  add() {
    this.isAddingEvent = true;
  }

  eventCreated($event){
    this.isAddingEvent = false;
    this.events.push($event);
  }

  eventCancel(){
    this.isAddingEvent = false;
  }

}
