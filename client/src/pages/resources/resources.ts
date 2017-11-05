import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { ResourceProvider, Resource } from '../../providers/resource/resource';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})

export class ResourcesPage {

  public resources: Resource[] = [
    {
      name: 'IPourLife', 
      email: 'renae@ipourlife.org', 
      phone: '417-581-3607', 
      pinned: false, 
      image: 'https://pbs.twimg.com/profile_images/426501667001880576/9RuuTX5T_400x400.jpeg', 
      description: 'I Pour Life is a 501 (c)(3) organization providing a hand up not a hand out for sustainability both locally and globally.'
    },
    {
      name: 'Crosslines - Food Assistance', 
      email: 'staff@ccozarks.org', 
      phone: '417-869-0563', 
      pinned: false, 
      image: 'http://www.crosslines.org/wp-content/uploads/2015/11/cross_Cobrand.png', 
      description: 'Crosslines provides support to families in crisis in Greene County through food assistance, hygiene items and clothing vouchers.'
    },
    {
      name: 'CU Transit Services', 
      email: 'social@cityutilities.net', 
      phone: '417-831-8782', 
      pinned: false, 
      image: 'https://www.cutransit.net/wp-content/uploads/cutransit-logo.png', 
      description: 'The Bus operates 365 days a year, offering a variety of routes during days, evenings, weekends and holidays. Need help deciding what route to take? Call us at (417) 831-8782 and we will help you plan your ride.'
    },
  ];

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer, private resourceProvider: ResourceProvider) {
    resourceProvider.getResources().then(x => this.resources = x);
  }

  getResources(): Resource[]{
    return this.resources;
  }

  call(resource: any) {
    window.location.href = `tel:${resource.phone}`;
 }

  email(resource: any) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {

      }
     });
     
     let newEmail = {
       to: resource.email,
       isHtml: true
     };
    
     this.emailComposer.open(newEmail);
  }
}