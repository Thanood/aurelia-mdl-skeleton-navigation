import { bindable, bindingMode, inlineView, inject } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
@inlineView(`
    <template>
    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input name.one-time="name" value.one-time="value" type="radio" class="mdl-radio__button" checked.bind="checked" disabled.bind="disabled"/>
        <span class="mdl-radio__label"><content></content></span>
    </label>
    </template>
`)
export class MdlRadio {
    @bindable disabled = false;
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        defaultValue: true
    }) checked;
    @bindable({
        defaultBindingMode: bindingMode.oneTime
    }) name;
    @bindable({
        defaultBindingMode: bindingMode.oneTime
    }) value;
    
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element.querySelector('label'));
    }
    // checkedChanged(newValue, oldValue) {
    //     // manage "checked" manually to be able to update toggle state when changed programmaticaly
    //     let input = this.element.querySelector('input'),
    //         label = this.element.querySelector('label');
    //         
    //     input.checked = newValue;
    //         
    //     if (label.MaterialRadio) {
    //         // label.MaterialRadio.checkDisabled();
    //         // label.MaterialRadio.checkToggleState();
    //         // if (newValue === this.value) {
    //         //     label.MaterialRadio.check(newValue);
    //         // } else {
    //         //     label.MaterialRadio.uncheck(newValue);
    //         // }
    //     } else {
    //         // console.warn('MdlSwitch', 'checkedChange', 'no MaterialSwitch property');
    //     }
    // }
}
