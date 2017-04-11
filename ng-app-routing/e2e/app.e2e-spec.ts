import { NgAppRoutingPage } from './app.po';

describe('ng-app-routing App', () => {
  let page: NgAppRoutingPage;

  beforeEach(() => {
    page = new NgAppRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
