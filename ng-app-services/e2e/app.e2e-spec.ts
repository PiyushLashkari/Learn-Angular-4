import { NgAppServicesPage } from './app.po';

describe('ng-app-services App', () => {
  let page: NgAppServicesPage;

  beforeEach(() => {
    page = new NgAppServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
