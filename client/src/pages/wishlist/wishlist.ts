import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  constructor(private userProvider: UserProvider){

  }

  getUserType(): string{
    return this.userProvider.currentUser.type;
  }
}