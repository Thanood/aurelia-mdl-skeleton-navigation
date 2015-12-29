import { bindable, bindingMode, inject, inlineView } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
@inlineView(`
    <template style="display: inline-block;">
    <input ref="input" class="mdl-slider mdl-js-slider" type="range" min.bind="min" max.bind="max" step.bind="step" value.bind="value" tabindex="0" disabled.bind="disabled"/>
    </template>
`)
export class MdlSlider {
    @bindable disabled = false;
    @bindable({
        defaultBindingMode: bindingMode.oneWay,
        defaultValue: 0
    }) min;
    @bindable({
        defaultBindingMode: bindingMode.oneWay,
        defaultValue: 100
    }) max;
    @bindable({
        defaultBindingMode: bindingMode.oneWay,
        defaultValue: 1
    }) step;
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        defaultValue: 0
    }) value;
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.input);
    }
    valueChanged(newValue) {
        let input = this.element.querySelector('input');
        if (input.MaterialSlider) {
            input.MaterialSlider.change(newValue);
        }
    }
}
