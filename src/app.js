import { inject, LogManager } from 'aurelia-framework';
import 'material-design-lite';

@inject(LogManager)
export class App {
    constructor(logManager) {
        this.rippleDuration = 1.3;
        this.log = logManager.getLogger('navigationApp');
    }
  configureRouter(config, router) {
    config.title = 'Aurelia Navigation';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
  attached() {
      componentHandler.upgradeDom();
      this.log.warn('dom upgraded (still)', this.log);
    //   window.setTimeout(() => { this.router.title = 'changed title'; }, 2000);
  }
}
