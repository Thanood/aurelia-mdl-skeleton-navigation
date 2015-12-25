import {inject, LogManager} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoService} from './services/todoService';

@inject(EventAggregator, TodoService, LogManager)
export class TodoView {
    constructor(eventAggregator, todoService, logManager) {
        this.eventAggregator = eventAggregator;
        this.todoService = todoService;
        this.log = logManager.getLogger('todos');
        this.newTodo = '';
        this.todos = todoService.getTodos();
        
        this.log.debug(this.todos);
        // this.eventAggregator.subscribe('todoService:added', todo => this.todos.push(todo));
    }
    addTodo() {
        if (this.newTodo) {
            // this.todos.push({ title: this.newTodo });
            this.todoService.addTodo({ title: this.newTodo, done: false, priority: 'med' });
            this.newTodo = '';
        }
    }
}
