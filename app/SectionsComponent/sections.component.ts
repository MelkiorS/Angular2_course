import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import  'rxjs/add/operator/map'
import  'rxjs/Rx'



interface Section {
    _id: string;
    title: string;
}

@Component({
    selector:'sections',
    moduleId:module.id,
    templateUrl:'sections.component.html'
})
export class SectionComponent{
    constructor(private http:Http) {
        this.readSections();
    }

    private sectionsUrl = 'sections';
    sections: Section[];

    readSections() {
        this.getSections().subscribe(sections=>{
            this.sections=sections;
        });
    }

    getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl).map(response => response.json() as Section[]);

    }

}