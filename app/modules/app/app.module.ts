import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppComponent}  from './components/app.component';
import {todoComponent} from '../../common/components/todoComponent/todo.component';
import {editorComponent} from '../../common/components/editorComponent/editor.component';
@NgModule({
    imports: [ BrowserModule, FormsModule],
    declarations: [AppComponent, todoComponent, editorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
