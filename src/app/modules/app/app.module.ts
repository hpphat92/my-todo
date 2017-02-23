import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent}  from './components/app.component.js';
import {todoComponent} from '../../common/components/todo/index.js';
import {editorComponent} from '../../common/components/editor/index.js';
@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [AppComponent, todoComponent, editorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
