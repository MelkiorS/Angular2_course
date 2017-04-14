import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observable} from "rxjs";

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
    private sectionsUrl = 'sections';
    sections: Section[];

    readSections() {
        this.getSections().subscribe(sections=>{
            this.sections=sections;
        });
    }

    getSections(): Observable<Section[]> {
        return this.http.get(this.sectionsUrl)
            .map(response => response.json() as Section[]);
    }

}