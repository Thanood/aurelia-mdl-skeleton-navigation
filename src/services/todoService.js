import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

class TodoStorage {
    getItem(key) {
        let value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        } else {
            return null;
        }
    }
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

@inject(EventAggregator, TodoStorage)
export class TodoService {
    constructor(eventAggregator, todoStorage) {
        this.eventAggregator = eventAggregator;
        this.todoStorage = todoStorage;
        this.todos = this.todoStorage.getItem('todos') || [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.todoStorage.setItem('todos', this.todos);
        this.eventAggregator.publish('todoService:added', todo);
    }
}
