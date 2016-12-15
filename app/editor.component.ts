import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'editor',
    templateUrl: 'editor.template.html'
})
export class editorComponent {
    @Output() addNew = new EventEmitter();
    @Input() content: string;

    constructor() {
    }

    onClick(): void {
        this.addNew.emit(this.content);
    }
}