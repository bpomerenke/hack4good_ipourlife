import { Component } from '@angular/core';

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

    ionViewDidLoad() {
        console.log('ionViewDidLoad CurriculumPage');
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

export class Assignment {
    name: string
    isCompleted: boolean
    url: string
}

export class Module {
    public selected: boolean = false;
    constructor(public id: number, public name: string, public assignments: Assignment[]) { }

    numberComplete(): number {
        return this.assignments.filter(x => x.isCompleted).length;
    }
}