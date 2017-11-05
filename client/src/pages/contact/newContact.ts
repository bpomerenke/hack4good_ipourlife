import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-contact-new',
  templateUrl: 'contact-new.html'
})
export class NewContactPage {
    @Output() contactCreated = new EventEmitter<any>();

    constructor(public navCtrl: NavController, private camera: Camera) {
        
    }

    newContactFirstName: string;
    newContactLastName: string;
    newContactPhone: number;
    newContactPhoto: any;

    saveContact() {
        // TODO: format phone numbers
        if(!this.newContactFirstName || !this.newContactLastName){
          return;
        }
    
        let newContact: Object = {
          name: this.newContactFirstName + ' ' + this.newContactLastName,
          number: this.newContactPhone,
          img: this.newContactPhoto? this.newContactPhoto : '../assets/imgs/defaultimage.jpg'
        }
    
        this.newContactFirstName = null;
        this.newContactLastName = null;
        this.newContactPhone = null;
        this.newContactPhoto = null;
    
        this.contactCreated.emit(newContact);
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
