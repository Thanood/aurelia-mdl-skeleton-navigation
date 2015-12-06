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
        newValue = new Number(newValue);
        if (newValue && newValue > 0) {
			this.element.setAttribute('data-badge', newValue);
		} else {
			this.element.removeAttribute('data-badge');
		}
    }
}
