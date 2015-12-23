import { bindable, bindingMode, inlineView, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
@inlineView(`
    <template>
    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input" checked.bind="checked" />
        <span class="mdl-checkbox__label"><content></content></span>
    </label>
    </template>
`)
export class MdlCheckbox {
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        defaultValue: true
    }) checked;
    
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element.querySelector('label'));
    }
    checkedChanged(newValue, oldValue) {
        // manage "checked" manually to be able to update toggle state when changed programmaticaly
        let input = this.element.querySelector('input'),
            label = this.element.querySelector('label');
            
        input.checked = newValue;
            
        if (label.MaterialCheckbox) {
            label.MaterialCheckbox.checkDisabled();
            label.MaterialCheckbox.checkToggleState();
        } else {
            // console.warn('MdlSwitch', 'checkedChange', 'no MaterialSwitch property');
        }
    }
}
