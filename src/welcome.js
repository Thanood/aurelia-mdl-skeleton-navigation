// import {computedFrom} from 'aurelia-framework';
// import { MdlToastService } from './aurelia-mdl/mdl-toast'; // seems not to be active yet

export class Welcome {

    constructor() {
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.previousValue = this.fullName;

        this.firstNameLabel = 'First Name';
        this.lastNameLabel = 'Last Name';
        this.showRaised = true;
    
        // seems not to be active yet
        // this.toast = new MdlToastService();
    
        this.table = {
            columns: [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Phone Number', field: 'phone' },
                { title: 'Email', field: 'email' }
            ],
            data: [
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' },
                { firstName: 'John', lastName: 'Doe', phone: '+49123456789', email: 'john@doe.com' }
            ]
        };
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
        window.setTimeout(() => this.firstNameLabel = 'Vorname', 1000);
        window.setTimeout(() => this.lastNameLabel = 'Nachname', 1000);
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
        // seems not to be active yet
        // this.toast.notify(`Welcome, ${this.fullName}!`);
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
