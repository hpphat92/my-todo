import {Component, OnInit} from '@angular/core';
import {Todo} from '../../../common/model/todo';
import '../../../common/components/todoComponent/todo.component';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './../templates/app.template.html',
})
export class AppComponent implements OnInit {
    todoes: Todo[] = [];

    _generateId(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    ngOnInit(): void {
        this.todoes = [
            {
                id: this._generateId(),
                content: 'Something helpful'
            },
            {
                id: this._generateId(),
                content: 'Antimalware'
            }];
    }

    onAddNewTodo(todoContent: string): void {
        this.todoes.push({
            id: this._generateId(),
            content: todoContent
        });
    }

    removeTodo(todo: Todo): void {
        let idx = this.todoes.findIndex((t) => {
            return t.id === todo.id;
        });
        if (idx >= 0) {
            this.todoes.splice(idx, 1);
        }
    }
}
