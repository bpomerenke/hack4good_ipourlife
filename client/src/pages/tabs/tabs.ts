import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  eventsRoot = EventsPage;
  resourcesRoot = AboutPage;
  contactsRoot = ContactPage;
  curriculumRoot = AboutPage;
  wishlistRoot = AboutPage;

  constructor() {

  }
}
