import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-wishlist-coach',
  templateUrl: 'wishlist-coach.html'
})
export class WishlistCoachPage {

  public wesleyRequests: any[] = [
    {
      item: 'Backpack'      
    },
    {
      item: 'Pencils'      
    },
    {
      item: 'Bus pass'      
    }
  ]

  public michelleRequests: any[] = [
    {
      item: 'Headphones'      
    },
    {
      item: 'Jacket'      
    }
  ]

  public clintRequests: any[] = [
    {
      item: 'Phone'      
    }
  ]

  public youths: any[] = [
    {
      name: 'Wesley Robertson',
      requests: this.wesleyRequests
    },
    {
      name: 'Michelle Crawford',
      requests: this.michelleRequests
    },
    {
      name: 'Clint Hooper',
      requests: this.clintRequests
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getYouthRequests():any[]{
    return this.youths;
  }
}