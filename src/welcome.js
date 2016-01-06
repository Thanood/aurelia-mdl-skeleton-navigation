import {computedFrom, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
// import { MdlToastService } from './aurelia-mdl/mdl-toast'; // seems not to be active yet
import { WelcomeUserService } from './services/welcomeUsers';

@inject(EventAggregator, WelcomeUserService)
export class Welcome {

    constructor(eventAggregator, welcomeUserService) {
        this.eventAggregator = eventAggregator;
        this.welcomeUserService = welcomeUserService;
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.phoneNumber = '';
        this.email = '';
        this.previousValue = this.fullName;

        this.firstNameLabel = 'First Name';
        this.lastNameLabel = 'Last Name';
        this.buttonDisabled = false;
        this.showRaised = true;
        this.sliderValue = 3;
        this.spinnerActive = false;
        this.users = [];

        // seems not to be active yet
        // this.toast = new MdlToastService();

        this.table = {
            columns: [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Phone Number', field: 'phoneNumber' },
                { title: 'Email', field: 'email' }
            ],
            data: this.users
        };

        this.eventAggregator.subscribe('welcomeUsers:added', user => this.users.push(user));
    }

    //Getters can't be directly observed, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below
    //as well as the corrresponding import above.
    //@computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    attached() {
        window.setTimeout(() => this.showRaised = false, 1200);
        window.setTimeout(() => this.firstNameLabel = "The person's first name", 1000);
        window.setTimeout(() => this.lastNameLabel = "That same person's last name", 1000);
    }

    submit($event) {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
        // console.log(`Welcome, ${this.fullName}!`, $event);
        
        // seems not to be active yet
        // this.toast.notify(`Welcome, ${this.fullName}!`);
        this.welcomeUserService.addUser({ firstName: this.firstName, lastName: this.lastName, phoneNumber: this.phoneNumber, email: this.email });
    }
    
    toggleSpinnerActive() {
        this.spinnerActive = !this.spinnerActive;
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }
}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
