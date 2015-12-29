import { bindable, bindingMode, inlineView, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
@inlineView(`
    <template>
    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-switch__input" checked.bind="checked" disabled.bind="disabled" />
        <span class="mdl-switch__label"><content></content></span>
    </label>
    </template>
`)
export class MdlSwitch {
    @bindable disabled = false;
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
            
        if (label.MaterialSwitch) {
            label.MaterialSwitch.checkDisabled();
            label.MaterialSwitch.checkToggleState();
        } else {
            // console.warn('MdlSwitch', 'checkedChange', 'no MaterialSwitch property');
        }
    }
}
