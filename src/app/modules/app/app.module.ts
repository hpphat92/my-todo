import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent}  from './components/app.component.js';
import {todoComponent} from '../../common/components/todoComponent/todo.component.js';
import {editorComponent} from '../../common/components/editorComponent/editor.component.js';
@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [AppComponent, todoComponent, editorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
