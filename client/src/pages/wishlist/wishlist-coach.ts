import { Component } from '@angular/core';

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

  getYouthRequests():any[]{
    return this.youths;
  }
}