import { bindable, inject, inlineView } from 'aurelia-framework';
import { getBooleanFromAttribute } from './common/helpers';
import 'material-design-lite';

@inlineView(`
    <template>
        <button type="button" class="mdl-button mdl-js-button" click.trigger="clicked($event, 'button')"><content /></button>
    </template>
`)
@inject(Element)
export class MdlButton {
    @bindable() disabled = false;
    @bindable() accent = 'false';
    @bindable() colored = 'false';
    @bindable() primary = 'false';
    @bindable() raised = 'true';
    @bindable() ripple = 'true';
    constructor(element) {
        this.element = element;
    }
    attached() {
        let btn = this.element.querySelector('button');
        if (getBooleanFromAttribute(this.accent)) {
            btn.classList.add('mdl-button--accent');
        }
        if (getBooleanFromAttribute(this.colored)) {
            btn.classList.add('mdl-button--colored');
        }
        if (getBooleanFromAttribute(this.primary)) {
            btn.classList.add('mdl-button--primary');
        }
        if (getBooleanFromAttribute(this.raised)) {
            btn.classList.add('mdl-button--raised');
        }
        if (getBooleanFromAttribute(this.ripple)) {
            btn.classList.add('mdl-js-ripple-effect');
        }
        componentHandler.upgradeElement(btn);
    }
    disabledChanged(newValue) {
        let btn = this.element.querySelector('button');
        if (newValue) {
            // this.element.setAttribute('disabled', 'disabled');
            btn.classList.add('mdl-button--disabled');
        } else {
            // this.element.removeAttribute('disabled');
            btn.classList.remove('mdl-button--disabled');
        }
    }
    raisedChanged(newValue, oldValue) {
        let btn = this.element.querySelector('button');
        if (btn) {
            if (newValue) {
                btn.classList.add('mdl-button--raised');
            } else {
                btn.classList.remove('mdl-button--raised');
            }
        }
    }
    clicked($event, src) {
        if (this.disabled === true) {
            $event.cancelBubble = true;
            $event.preventDefault();
        }
    }
}
