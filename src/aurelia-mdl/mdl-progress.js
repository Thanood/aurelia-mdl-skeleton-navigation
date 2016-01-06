import { bindable, inject, inlineView } from 'aurelia-framework';

@inject(Element)
@inlineView(`
    <template style="display: block;" class="mdl-js-progress">
        
    </template>
`)
export class MdlProgress {
    @bindable() progress = 0;
    @bindable() buffer = 0;
    
    constructor(element) {
        this.element = element;
    }
    attached() {
        componentHandler.upgradeElement(this.element);
        this.element.MaterialProgress.setProgress(this.progress);
        this.element.MaterialProgress.setBuffer(this.buffer);
    }
    bufferChanged(newValue) {
        if (this.element.MaterialProgress) {
            this.element.MaterialProgress.setBuffer(newValue);
        }
    }
    progressChanged(newValue) {
        if (this.element.MaterialProgress) {
            this.element.MaterialProgress.setProgress(newValue);
        }
    }
}