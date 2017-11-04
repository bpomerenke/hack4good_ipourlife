import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { EventsPage } from '../pages/events/events';
import { ResourcesPage} from '../pages/resources/resources';
import { TabsPage } from '../pages/tabs/tabs';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CurriculumPage } from '../pages/curriculum/curriculum';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    EventsPage,
    ResourcesPage,
    TabsPage,
    WishlistPage,
    CurriculumPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    EventsPage,
    ResourcesPage,
    TabsPage,
    WishlistPage,
    CurriculumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
