import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NewContactPage } from '../pages/contact/newContact';
import { EventsPage } from '../pages/events/events';
import { NewEventPage } from '../pages/events/newEvent';
import { ResourcesPage} from '../pages/resources/resources';
import { TabsPage } from '../pages/tabs/tabs';
import { UserInfoPage } from '../pages/user-info/user-info';
import { WishlistPage } from '../pages/wishlist/wishlist';

import { CurriculumPage } from '../pages/curriculum/curriculum';
import { WishlistCoachPage } from '../pages/wishlist/wishlist-coach';
import { WishlistYouthPage } from '../pages/wishlist/wishlist-youth';
import { CurriculumYouthPage } from '../pages/curriculum/curriculum-youth';
import { CurriculumCoachPage } from '../pages/curriculum/curriculum-coach';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    EventsPage,
    ResourcesPage,
    TabsPage,
    CurriculumPage,
    WishlistPage,
    WishlistCoachPage,
    WishlistYouthPage,
    CurriculumYouthPage,
    CurriculumCoachPage,
    UserInfoPage,
    EventsPage,
    NewContactPage,
    NewEventPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    CurriculumPage,
    WishlistYouthPage,
    CurriculumYouthPage,
    CurriculumCoachPage,
    EventsPage,
    NewContactPage,
    NewEventPage,
    UserInfoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    LoginProvider
  ]
})
export class AppModule {}
