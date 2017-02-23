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
var AppComponent = (function () {
    function AppComponent() {
        this.todoes = [];
    }
    AppComponent.prototype._generateId = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.todoes = [
            {
                id: this._generateId(),
                content: 'Something helpful'
            },
            {
                id: this._generateId(),
                content: 'Antimalware'
            }];
    };
    AppComponent.prototype.onAddNewTodo = function (todoContent) {
        this.todoes.push({
            id: this._generateId(),
            content: todoContent
        });
    };
    AppComponent.prototype.removeTodo = function (todo) {
        var idx = this.todoes.findIndex(function (t) {
            return t.id === todo.id;
        });
        if (idx >= 0) {
            this.todoes.splice(idx, 1);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './../templates/app.template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map