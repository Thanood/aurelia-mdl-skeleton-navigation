import { bindable, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
export class MdlButton {
    @bindable() accent = 'false';
    @bindable() colored = 'false';
    @bindable() primary = 'false';
    @bindable() raised = 'true';
    @bindable() ripple = 'true';
    constructor(element) {
        this.element = element;
    }
    attached() {
        let btn = this.element.querySelector('button');
        if (this.accent === 'true') {
            btn.classList.add('mdl-button--accent');
        }
        if (this.colored === 'true') {
            btn.classList.add('mdl-button--colored');
        }
        if (this.primary === 'true') {
            btn.classList.add('mdl-button--primary');
        }
        if (this.raised === 'true') {
            btn.classList.add('mdl-button--raised');
        }
        if (this.ripple === 'true') {
            btn.classList.add('mdl-js-ripple-effect');
        }
        componentHandler.upgradeElement(btn);
    }
    raisedChanged(newValue, oldValue) {
        let btn = this.element.querySelector('button');
        if (newValue) {
            btn.classList.add('mdl-button--raised');
        } else {
            btn.classList.remove('mdl-button--raised');
        }
    }
}
