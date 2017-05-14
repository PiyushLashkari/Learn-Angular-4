import { NgAppFormsPage } from './app.po';

describe('ng-app-forms App', () => {
  let page: NgAppFormsPage;

  beforeEach(() => {
    page = new NgAppFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
