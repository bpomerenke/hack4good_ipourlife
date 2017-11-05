import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})

export class ResourcesPage {

  public resources:any[] = [
    {
      name: 'IPourLife', 
      email: '', 
      phone: '', 
      pinned: false, 
      img: 'https://pbs.twimg.com/profile_images/426501667001880576/9RuuTX5T_400x400.jpeg', 
      description: 'I Pour Life is a 501 (c)(3) organization providing a hand up not a hand out for sustainability both locally and globally.'
    },
    {
      name: 'Crosslines - Food Assistance', 
      email: '', 
      phone: '', 
      pinned: false, 
      img: 'http://www.crosslines.org/wp-content/uploads/2015/11/cross_Cobrand.png', 
      description: 'Crosslines provides support to families in crisis in Greene County through food assistance, hygiene items and clothing vouchers.'
    },
    {
      name: 'CU Transit Services', 
      email: '', 
      phone: '(417) 831-8782', 
      pinned: false, 
      img: 'https://www.cutransit.net/wp-content/uploads/cutransit-logo.png', 
      description: 'The Bus operates 365 days a year, offering a variety of routes during days, evenings, weekends and holidays. Need help deciding what route to take? Call us at (417) 831-8782 and we will help you plan your ride.'
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  getResources():any[]{
    return this.resources;
  }

  call(contact: any) {
    window.location.href = `tel:${contact.number}`;
 }
}