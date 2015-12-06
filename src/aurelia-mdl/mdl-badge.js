import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import 'material-design-lite';

@customAttribute('mdl-badge')
@inject(Element)
export class MdlBadge {
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        defaultValue: 0
    }) num;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.element.classList.add('mdl-badge');
        // componentHandler.upgradeElement(this.element);
    }
    numChanged(newValue) {
        this.num = new Number(newValue);
        if (this.num && this.num > 0) {
			this.element.setAttribute('data-badge', this.num);
		} else {
			this.element.removeAttribute('data-badge');
		}
    }
}
