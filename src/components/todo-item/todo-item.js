import { bindable } from 'aurelia-framework';

export class TodoItem {
    static id = 0;
    
    @bindable() todo;
    constructor() {
        this.isEditing = false;
        this.id = TodoItem.id++;
    }
    finishEditing() {
        this.isEditing = false;
        this.todo.title = this.input.value;
    }
    setEditing() {
        this.isEditing = true;
    }
}
