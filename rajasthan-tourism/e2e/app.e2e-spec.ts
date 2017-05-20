import { RajasthanTourismPage } from './app.po';

describe('rajasthan-tourism App', () => {
  let page: RajasthanTourismPage;

  beforeEach(() => {
    page = new RajasthanTourismPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
