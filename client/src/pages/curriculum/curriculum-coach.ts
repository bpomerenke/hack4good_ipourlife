import { Component } from '@angular/core';

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
    private youths:any[] = [
        {name: "Joe Bieber"}
    ];

    ionViewDidLoad() {
        console.log('ionViewDidLoad CurriculumPage');
    }

    getYouths(): any[]{
        return this.youths;
    }
}