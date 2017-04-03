
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";
import {AppComponent2} from "./app2.component";


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, AppComponent2 ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }