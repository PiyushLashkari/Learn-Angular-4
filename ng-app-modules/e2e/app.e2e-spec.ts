import { NgAppModulesPage } from './app.po';

describe('ng-app-modules App', () => {
  let page: NgAppModulesPage;

  beforeEach(() => {
    page = new NgAppModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
