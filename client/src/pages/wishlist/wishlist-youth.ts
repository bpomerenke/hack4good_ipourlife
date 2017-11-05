import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WishProvider } from '../../providers/wish/wish';

import { Wish } from '../../models/Wish';


@Component({
  selector: 'page-wishlist-youth',
  templateUrl: 'wishlist-youth.html'
})
export class WishlistYouthPage {
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

  selectedItems:{} = { 'Supplies' : [], 'Groceries':[], 'Clothing':[], 'Misc': [] };
  currentWishes:Wish[] = [];
  
  constructor(private wishProvider: WishProvider, public alertCtrl: AlertController) {
    console.log("constructor login")
    this.wishProvider.getWishes().then((wishes)=>{
      this.currentWishes = wishes;
    });
  }

  getWishlistItems():any[]{
    return this.wishlistItems;
  }

  async saveRequests() {
    for(let item of this.getSelectedItems()){
      await this.wishProvider.postWishes({name: item});
    }
  }

  getRequests(): Wish[] {
    return this.currentWishes;
  }

  addItem(items: string[], category:string){
    this.selectedItems[category] = [];
    for(let item of items){
      this.selectedItems[category].push(item);
    }
  }

  getSelectedItems():string[]{
    let result = [];
    for(let category in this.selectedItems){
      for(let item of this.selectedItems[category]){
        result.push(item);
      }
    }
    return result;
  }

  confirmRequests() {
    let confirm = this.alertCtrl.create({
      title: 'Submit these requests?',
      message: this.getSelectedItems().join(","),
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            return;
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.saveRequests();
            this.selectedItems = [];
          }
        }
      ]
    });
    confirm.present();
  }
}