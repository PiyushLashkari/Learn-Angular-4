import { MyEcommercePage } from './app.po';

describe('my-ecommerce App', () => {
  let page: MyEcommercePage;

  beforeEach(() => {
    page = new MyEcommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
