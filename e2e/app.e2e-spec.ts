import { CheckoutClientPage } from './app.po';

describe('checkout-client App', () => {
  let page: CheckoutClientPage;

  beforeEach(() => {
    page = new CheckoutClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
