import { ProPage } from './app.po';

describe('pro App', () => {
  let page: ProPage;

  beforeEach(() => {
    page = new ProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
