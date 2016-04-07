import { bindable, customElement, inject } from 'aurelia-framework';

@customElement('mdl-drawer')
@inject(Element)
export class MdlDrawer {
    @bindable() title;

    constructor(element) {
        this.element = element;
    }
}
