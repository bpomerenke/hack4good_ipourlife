import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  constructor(private loginProvider: LoginProvider){

  }

  getUserType(): string{
    return this.loginProvider.currentUser.type;
  }
}