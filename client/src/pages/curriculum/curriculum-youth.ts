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
    private modules: Module[] = [];

    constructor(private activityProvider: ActivityProvider){

        this.activityProvider.getAll().then((activities)=>{
            console.log("got activities:", activities);

            for(let activity of activities){
                let newModule = new Module(4, activity.module_name, []);
                let assignmnet = new Assignment();
                assignmnet.name = activity.title;
                assignmnet.isCompleted = false;
                newModule.assignments.push(assignmnet);
                this.modules.push(newModule);
            }
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