import {Component, QueryList, ViewChildren} from '@angular/core';
import {Todo} from '../../../common/model/todo.js';
import {todoComponent} from '../../../common/components/todo/index.js'
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './../templates/app.template.html',
})
export class AppComponent {
    todoes: Todo[] = [];
    _todoComponents: todoComponent[] = [];
    @ViewChildren(todoComponent) todoComponents: QueryList<todoComponent>;

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
    ngAfterViewInit() {
        this._todoComponents = this.todoComponents.toArray();
    }
    showAlert(index: number): void {
        console.log(this._todoComponents[index].showAlert());
    }
}
