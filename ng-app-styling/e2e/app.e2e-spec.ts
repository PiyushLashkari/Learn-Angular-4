import { NgAppStylingPage } from './app.po';

describe('ng-app-styling App', () => {
  let page: NgAppStylingPage;

  beforeEach(() => {
    page = new NgAppStylingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
