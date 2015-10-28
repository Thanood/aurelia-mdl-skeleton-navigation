import { bindable, containerless, customElement, inject } from 'aurelia-framework';
import { componentHandler } from 'material-design-lite';

// @containerless
@customElement('mdl-button')
@inject(Element)
export class MdlButton {
    @bindable() raised = false;
    @bindable() ripple = false;
    constructor(element) {
        this.element = element;
    }
    raisedChanged(newValue, oldValue) {
        this.raised = (newValue === 'true' || newValue === '');
    }
    rippleChanged(newValue, oldValue) {
        this.ripple = (newValue == 'true' || newValue === '');
    }
    attached() {
        let target = this.element.querySelector('button');
        if (this.raised) {
            target.classList.add('mdl-button--raised');
        }
        if (this.ripple) {
            target.classList.add('mdl-js-ripple-effect');
        }
        componentHandler.upgradeElement(target);
    }
}
