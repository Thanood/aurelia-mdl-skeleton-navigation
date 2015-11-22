//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  
  constructor() {
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.previousValue = this.fullName;
    
    this.firstNameLabel = 'First Name';
    this.lastNameLabel = 'Last Name';
    this.showRaised = true;
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
    window.setTimeout(() => this.showRaised = false, 1000);
    window.setTimeout(() => this.firstNameLabel = 'Vorname', 1000);
    window.setTimeout(() => this.lastNameLabel = 'Nachname', 1000);
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
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
