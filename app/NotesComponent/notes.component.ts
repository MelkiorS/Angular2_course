import {Component} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface Note {
    text: string;
}

@Component({
    selector: 'notes',
    moduleId: module.id,
    templateUrl: 'notes.component.html'
})
export class NotesComponent {
    constructor(private http: Http) {
        this.getNotes().then(notes=>{
            this.notes=notes
            console.log(notes);
        });
    }

    notes: Note[] = [
        {text: "Note one"},
        {text: "Note two"}
    ]

    text: string;
    private notesUrl = 'notes';

    add() {
        let note = {text: this.text}
        this.notes.push(note);

        // this.http.post(this.notesUrl)
        //     .toPromise()
        //     .then();
    }

    remove(idx) {
        this.notes.splice(idx,1);
    }

    getNotes(): Promise<Note[]> {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[]);
    }

    addNote(note:Note) {
        this.http.post(this.notesUrl, {body: note}).toPromise()
            .then(response => console.log("note sent, response", response) );
    }

}
