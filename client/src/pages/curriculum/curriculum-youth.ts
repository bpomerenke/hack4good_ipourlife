import { Component } from '@angular/core';
import { Assignment } from '../../models/Assignment';

import { ActivityProvider } from '../../providers/activity/activity'

/**
 * Generated class for the CurriculumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-curriculum-youth',
    templateUrl: 'curriculum-youth.html',
})

export class CurriculumYouthPage {
    private assignments1: any[] = [{ name: "Activity 1", isCompleted: false }, { name: "Activity 2", isCompleted: true }];
    private assignments2: any[] = [{ name: "Worksheet 1", isCompleted: true }, { name: "Activity 3", isCompleted: true }];
    private assignments3: any[] = [{ name: "Worksheet 2", isCompleted: false }];

    private modules: Module[] = [
        new Module(1, "Emotional Development", this.assignments1),
        new Module(2, "Identity Development", this.assignments2),
        new Module(3, "Employment Development", this.assignments3)
    ];

    constructor(private activityProvider: ActivityProvider){

        this.activityProvider.getAll().then((activities)=>{
            console.log("got activities:", activities);
        });
    }
    ionViewDidLoad() {
    }

    getModules(): any[] {
        return this.modules;
    }

    toggleSelection(item: Module): void {
        item.selected = !item.selected;
    }

    selectAssignment(item: Assignment): void {
        this.currentAssignment = item;
    }

    private currentAssignment: Assignment = null
}



export class Module {
    public selected: boolean = false;
    constructor(public id: number, public name: string, public assignments: Assignment[]) { }

    numberComplete(): number {
        return this.assignments.filter(x => x.isCompleted).length;
    }
}