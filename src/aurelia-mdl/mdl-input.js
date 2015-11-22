import { bindable, bindingMode, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
export class MdlInput {
    @bindable() label = '';
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        defaultValue: ''
    }) value;
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element);
    }
}
