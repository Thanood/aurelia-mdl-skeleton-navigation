import { bindable, inject } from 'aurelia-framework';
import { getBooleanFromAttribute } from './common/helpers';
import 'material-design-lite';

@inject(Element)
export class MdlButton {
    @bindable() disabled = false;
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
        if (getBooleanFromAttribute(this.accent)) {
            btn.classList.add('mdl-button--accent');
        }
        if (getBooleanFromAttribute(this.colored)) {
            btn.classList.add('mdl-button--colored');
        }
        if (getBooleanFromAttribute(this.primary)) {
            btn.classList.add('mdl-button--primary');
        }
        if (getBooleanFromAttribute(this.raised)) {
            btn.classList.add('mdl-button--raised');
        }
        if (getBooleanFromAttribute(this.ripple)) {
            btn.classList.add('mdl-js-ripple-effect');
        }
        componentHandler.upgradeElement(btn);
    }
    raisedChanged(newValue, oldValue) {
        let btn = this.element.querySelector('button');
        if (btn) {
            if (newValue) {
                btn.classList.add('mdl-button--raised');
            } else {
                btn.classList.remove('mdl-button--raised');
            }
        }
    }
}
