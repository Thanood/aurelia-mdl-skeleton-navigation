import { componentHandler } from 'material-design-lite';
import 'material-design-lite/material.css!';
import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('mdl-layout')
@inject(Element)
export class MdlLayout {
    @bindable() router;
    @bindable() title;
    constructor(element) {
        this.element = element;
        this.title = 'aurelia-mdl';
    }
    attached() {
        componentHandler.upgradeElement(this.element);
    }
}
