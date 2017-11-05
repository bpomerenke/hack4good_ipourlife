import { Component, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ContactProvider } from '../../providers/contact/contact';

@Component({
  selector: 'page-contact-new',
  templateUrl: 'contact-new.html'
})
export class NewContactPage {
    @Output() contactCreated = new EventEmitter<any>();
    @Output() contactCancel = new EventEmitter<any>();

    constructor(private camera: Camera, private contactProvider: ContactProvider) {}

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

        this.contactProvider.createContact(newContact).then(() => {
          this.contactCreated.emit(newContact); 
        });        
      }

      cancelContact(){
        this.contactCancel.emit();
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
