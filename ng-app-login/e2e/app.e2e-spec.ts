import { NgAppLoginPage } from './app.po';

describe('ng-app-login App', () => {
  let page: NgAppLoginPage;

  beforeEach(() => {
    page = new NgAppLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
