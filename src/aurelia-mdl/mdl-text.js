import { componentHandler } from 'material-design-lite';
import 'material-design-lite/material.css!';
import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('mdl-text')
@inject(Element)
export class MdlText {
    static _id = 0;

    @bindable() label;
    @bindable() value;
    constructor(element) {
        this.id = 'MdlText_' + MdlText._id++;
        this.element = element;
        this.label = '';
        this.value = '';
    }
    attached() {
        componentHandler.upgradeElement(this.element);
    }
    valueChanged(nv, ov) {
        console.log('input value changed', nv, ov);
    }
}
