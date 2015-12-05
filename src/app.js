import 'material-design-lite';

export class App {
    constructor() {
        this.rippleDuration = 1.3;
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
    //   window.setTimeout(() => { this.router.title = 'changed title'; }, 2000);
  }
}
