import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EventsPage } from '../events/events';
import { ResourcesPage } from '../resources/resources';
import { CurriculumPage } from '../curriculum/curriculum'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  eventsRoot = EventsPage;
  resourcesRoot = ResourcesPage;
  contactsRoot = ContactPage;
  curriculumRoot = CurriculumPage;
  wishlistRoot = AboutPage;

  constructor() {

  }
}
