import { customAttribute, bindable, inject } from 'aurelia-framework';
import 'material-design-lite';

@customAttribute('mdl-tooltip')
@inject(Element)
export class MdlToolTip {
    static idCounter = 0;
    
    @bindable() text = '';
    @bindable() large = false;
    
    constructor(element) {
        this.element = element;
    }
    attached() {
        // this.element.classList.add('mdl-tooltip');
        // if (this.large) {
        //     this.element.classList.add('mdl-tooltip--large');
        // }
        
        if (!this.element.id) {
            this.element.id = 'mdlTooltip_Target_' + (MdlToolTip.idCounter++);
        }
        
        let tooltip = `<div class="mdl-tooltip ${this.large ? 'mdl-tooltip--large' : ''}" for="${this.element.id}">${this.text}</div>`;
        this.element.insertAdjacentHTML('afterend', tooltip);
        componentHandler.upgradeElement(this.element.parentNode.querySelector('.mdl-tooltip'));
    }
}
