import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameEditorComponent} from './name-editor/name-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        NameEditorComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
