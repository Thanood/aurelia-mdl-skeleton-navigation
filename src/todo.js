import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoService} from './services/todoService';

@inject(EventAggregator, TodoService)
export class TodoView {
    constructor(eventAggregator, todoService) {
        this.eventAggregator = eventAggregator;
        this.todoService = todoService;
        this.newTodo = '';
        this.todos = todoService.getTodos();
        // this.eventAggregator.subscribe('todoService:added', todo => this.todos.push(todo));
    }
    addTodo() {
        if (this.newTodo) {
            // this.todos.push({ title: this.newTodo });
            this.todoService.addTodo({ title: this.newTodo, done: false });
            this.newTodo = '';
        }
    }
}
