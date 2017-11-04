import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  public suppliesOptions: any[] = [
    {
      name: 'Notebooks'      
    },
    {
      name: 'Pencils'      
    },
    {
      name: 'Backpack'      
    },
    {
      name: 'Headphones'      
    }
  ]

  public groceriesOptions: any[] = [
    {
      name: 'Cereal'      
    },
    {
      name: 'Eggs'      
    },
    {
      name: 'Bread'      
    },
    {
      name: 'Deli meat'      
    }
  ]

  public clothingOptions: any[] = [
    {
      name: 'Jacket'      
    },
    {
      name: 'Dress pants'      
    },
    {
      name: 'Sneakers'      
    },
    {
      name: 'Hat'      
    }
  ]

  public miscOptions: any[] = [
    {
      name: 'Bus pass'      
    },
    {
      name: 'Phone'      
    },
    {
      name: 'Nail polish'      
    }
  ]

  public wishlistItems: any[] = [
    {
      name: 'Supplies',
      options: this.suppliesOptions
    },
    {
      name: 'Groceries',
      options: this.groceriesOptions
    },
    {
      name: 'Clothing',
      options: this.clothingOptions
    },
    {
      name: 'Misc',
      options: this.miscOptions
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getWishlistItems():any[]{
    return this.wishlistItems;
  }
}