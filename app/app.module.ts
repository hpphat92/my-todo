import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent}  from './app.component';
import {todoComponent} from './todo.component';
import {editorComponent} from './editor.component';
@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [AppComponent, todoComponent, editorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
