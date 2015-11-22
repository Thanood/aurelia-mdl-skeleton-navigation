import { componentHandler } from 'material-design-lite';
import 'material-design-lite/material.css!';
import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('mdl-app-layout')
@inject(Element)
export class MdlLayout {
    @bindable() router;
    @bindable() title = 'aurelia-mdl';
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element);
    }
}
