import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  isAddingContact: boolean = false;
  newContactFirstName: string;
  newContactLastName: string;
  newContactPhone: number;
  newContactPhoto: any;

  public contacts: any[] = [
    {
      name: 'Mark Delaney',
      number: '417-555-5555',
      img: '../assets/imgs/coach-mark.jpeg'
    },
    {
      name: 'Stephanie Anderson',
      number: '417-581-3607',
      img: '../assets/imgs/stephanieanderson.jpg'
    },
    {
      name: 'Sherry Coker',
      number: '417-447-8884',
      img: '../assets/imgs/sherrycoker.jpeg'
    },
    {
      name: 'Greg Johnson',
      number: '602-888-0235',
      img: '../assets/imgs/gregjohnson.jpg'
    }
  ];

  constructor(public navCtrl: NavController, private camera: Camera) {
      
  }

  getContacts():any[]{
    return this.contacts;
  }

  call(contact: any) {
     window.location.href = `tel:${contact.number}`;
  }

  add() {
    this.isAddingContact = true;
  }

  saveContact() {
    // TODO: format phone numbers
    this.isAddingContact = false;
    let newContact: Object = {
      name: this.newContactFirstName + ' ' + this.newContactLastName,
      number: this.newContactPhone,
      img: this.newContactPhoto? this.newContactPhoto : '../assets/imgs/defaultimage.jpg'
    }

    this.newContactFirstName = null;
    this.newContactLastName = null;
    this.newContactPhone = null;
    this.newContactPhoto = null;

    this.contacts.push(newContact);
  }

  uploadPhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.newContactPhoto = base64Image;
     }, (err) => {
      // Handle error
     });
  }
  
}
