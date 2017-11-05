import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'page-event-new',
  templateUrl: 'event-new.html'
})
export class NewEventPage {
    @Output() eventCreated = new EventEmitter<any>();
    @Output() eventCancel = new EventEmitter<any>();

    constructor() {
        
    }

    newEventTitle: string;
    newEventMonth: string;
    newEventDay: number;
    newEventYear: number;
    newEventDate: any;

    saveEvent() {
        // TODO: format phone numbers
        if(!this.newEventTitle || !this.newEventMonth || !this.newEventDay || !this.newEventYear){
          return;
        }

        let newEvent: Object = {
          name: this.newEventTitle,
          date: this.newEventMonth.substring(0,3) + ' ' + this.newEventDay,
          month: this.newEventMonth + ' ' + this.newEventYear
        }
    
        this.newEventTitle = null;
        this.newEventMonth = null;
        this.newEventDay = null;
        this.newEventYear = null;
    
        this.eventCreated.emit(newEvent);
      }

      cancelEvent(){
        this.eventCancel.emit();
      }

}
