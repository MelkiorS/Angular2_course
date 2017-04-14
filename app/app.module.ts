
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./AppComponent/app.component";
import {AppComponent2} from "./app2.component";
import {NotesComponent} from "./NotesComponent/notes.component";
import {HttpModule} from "@angular/http";


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule],
    declarations: [ AppComponent, NotesComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }