import { bindable, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
export class MdlButton {
    @bindable() raised = true;
    @bindable() ripple = true;
    constructor(element) {
        this.element = element;
    }
    attached() {
        let btn = this.element.querySelector('button');
        if (this.raised) {
            btn.classList.add('mdl-button--raised');
        }
        if (this.ripple) {
            btn.classList.add('mdl-js-ripple-effect');
        }
        componentHandler.upgradeElement(btn);
    }
    raisedChanged(newValue, oldValue) {
        console.log('mdl-button', 'raisedChanged from', oldValue, 'to', newValue);
        let btn = this.element.querySelector('button');
        if (newValue) {
            btn.classList.add('mdl-button--raised');
        } else {
            btn.classList.remove('mdl-button--raised');
        }
        // componentHandler.upgradeElement(btn);
    }
}
