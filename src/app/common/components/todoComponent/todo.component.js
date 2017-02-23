"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_js_1 = require('../../model/todo.js');
var todoComponent = (function () {
    function todoComponent() {
        this.onRemove = new core_1.EventEmitter();
    }
    todoComponent.prototype.removeTodo = function () {
        this.onRemove.emit();
    };
    todoComponent.prototype.onEditTodo = function (content) {
        this.content.content = content;
        this.editting = false;
    };
    todoComponent.prototype.onEdit = function () {
        this.editting = !this.editting;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_js_1.Todo)
    ], todoComponent.prototype, "content", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], todoComponent.prototype, "onRemove", void 0);
    todoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo',
            templateUrl: 'todo.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], todoComponent);
    return todoComponent;
}());
exports.todoComponent = todoComponent;
//# sourceMappingURL=todo.component.js.map