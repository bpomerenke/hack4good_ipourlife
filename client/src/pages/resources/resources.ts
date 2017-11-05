import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { ResourceProvider, Resource } from '../../providers/resource/resource';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})

export class ResourcesPage {

  public resources: Resource[] = [];

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer, private resourceProvider: ResourceProvider) {
    resourceProvider.getResources().then(x => this.resources = x);
  }

  getResources(): Resource[] {
    return this.resources;
  }

  call(resource: any) {
    window.location.href = `tel:${resource.phone}`;
  }

  email(resource: any) {
    console.log(resource)
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        let newEmail = {
          to: resource.email,
          isHtml: true
        };

        this.emailComposer.open(newEmail);
      }
    }).catch(() => {
      document.location.href = `mailto:${resource.email}`;
    });
  }
}