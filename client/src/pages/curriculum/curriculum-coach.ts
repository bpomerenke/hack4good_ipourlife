import { Component } from '@angular/core';
import { Assignment } from '../../models/Assignment';

/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-curriculum-coach',
    templateUrl: 'curriculum-coach.html',
})

export class CurriculumCoachPage {
    private assignments1: any[] = [{ name: "Activity 1", isCompleted: false }, { name: "Activity 2", isCompleted: true }];
    private assignments2: any[] = [{ name: "Worksheet 1", isCompleted: true }, { name: "Activity 3", isCompleted: true }];

    private youths:Youth[] = [
        {name: "Joe Bieber", assignments: this.assignments1, selected:false},
        {name: "Emily Patterson", assignments: this.assignments2, selected:false}
    ];

    ionViewDidLoad() {
        console.log('ionViewDidLoad CurriculumPage');
    }

    getYouths(): Youth[]{
        return this.youths;
    }

    toggleSelection(youth: Youth){
        youth.selected = !youth.selected;
    }
}

export class Youth{
    name: string
    selected: boolean
    assignments: Assignment[]
}