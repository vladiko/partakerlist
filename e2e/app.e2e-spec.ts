import { PartakerlistPage } from './app.po';

describe('partakerlist App', () => {
  let page: PartakerlistPage;

  beforeEach(() => {
    page = new PartakerlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
