import { bindable, customElement, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@customElement('mdl-layout')
@inject(Element, EventAggregator)
export class MdlLayout {
    @bindable() drawer;
    @bindable() header;

    constructor(element, eventAggregator) {
        this.element = element;
        eventAggregator.subscribe('router:navigation:success', (payload) => {
          if (payload.result.completed == true) {
            var drawer = this.element.querySelector('.mdl-layout__drawer')
            if (drawer.classList.contains(this.element.MaterialLayout.CssClasses_.IS_DRAWER_OPEN)) {
              this.element.MaterialLayout.toggleDrawer();
            }
          }
        });
    }

    attached() {
        componentHandler.upgradeElement(this.element);
    }
}
