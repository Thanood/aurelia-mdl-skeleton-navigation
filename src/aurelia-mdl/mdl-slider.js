import { bindable, bindingMode, inject, inlineView } from 'aurelia-framework';
import 'material-design-lite';

@inject(Element)
@inlineView(`
    <template style="display: inline-block;">
    <input ref="input" class="mdl-slider mdl-js-slider" type="range" min.bind="min" max.bind="max" value.bind="value" tabindex="0" />
    </template>
`)
export class MdlSlider {
    @bindable() min = 0;
    @bindable() max = 100;
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
