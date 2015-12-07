import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class WelcomeUserService {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    addUser(user) {
        this.users.push(user);
        this.eventAggregator.publish('welcomeUsers:added', user);
    }
}
