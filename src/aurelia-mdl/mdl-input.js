import { componentHandler } from 'material-design-lite';
import 'material-design-lite/material.css!';
import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('mdl-input')
@inject(Element)
export class MdlInput {
    static _id = 0;

    @bindable() label = '';
    @bindable() value = '';
    constructor(element) {
        this.id = 'MdlInput_' + MdlInput._id++;
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element);
    }
    valueChanged(nv, ov) {
        console.log('input value changed', nv, ov);
    }
}
