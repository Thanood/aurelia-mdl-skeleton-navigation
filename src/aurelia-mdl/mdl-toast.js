// import { bindable, customAttrbute, inject } from 'aurelia-framework';
import 'material-design-lite';

export class MdlToastService {
    constructor() {
        this.toast = document.querySelector('.mdl-js-snackbar');
        if (!this.toast) {
            this.toast = document.createElement('div');
            this.toast.classList.add('mdl-js-snackbar');
            document.body.appendChild(this.toast);
            componentHandler.upgradeElement(this.toast);
        }
    }
    notify(message) {
        this.toast.MaterialSnackbar.showSnackbar({ message });
    }
}
