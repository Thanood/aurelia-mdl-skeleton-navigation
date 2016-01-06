import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';

@customAttribute('mdl-spinner')
@inject(Element)
export class MdlSpinner {
    // @bindable({ defaultBindingMode: bindingMode.twoWay }) isActive = false;
    @bindable({
        defaultBindingMode: bindingMode.twoWay,
        attribute: 'is-active',
        changeHandler: 'isActiveChanged',
        name: 'isActive'
    }) isActive = false;
    
    constructor(element) {
        this.element = element;
    }
    attached() {
        let classes = [
          'mdl-spinner',
          'mdl-js-spinner'  
        ];
        if (this.isActive) {
            classes.push('is-active');
        }
        classes.forEach(c => this.element.classList.add(c));
        
        componentHandler.upgradeElement(this.element);
    }
    isActiveChanged(newValue) {
        if (newValue) {
            this.element.classList.add('is-active');
        } else {
            this.element.classList.remove('is-active');
        }
    }
}
