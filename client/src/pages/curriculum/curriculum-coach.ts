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
    private youths:Youth[] = [
        {name: "Joe Bieber", assignments: []},
        {name: "Emily Patterson", assignments: []}
    ];

    ionViewDidLoad() {
        console.log('ionViewDidLoad CurriculumPage');
    }

    getYouths(): Youth[]{
        return this.youths;
    }
}

export class Youth{
    name: string
    assignments: Assignment[]
}