import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Todo} from '../../model/todo.js';
@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'templates/todo.html'
})
export class todoComponent {
    @Output() onRemove = new EventEmitter();
    public editting: boolean;

    removeTodo(): void {
        this.onRemove.emit();
    }

    onEditTodo(content: string): void {
        this.editting = false;
    }

    onEdit(): void {
        this.editting = !this.editting;
    }

    showAlert(): void {
        alert('Something wrong.')
    }
}