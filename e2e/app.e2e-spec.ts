import { LongAfterMidnightPage } from './app.po';

describe('long-after-midnight App', () => {
  let page: LongAfterMidnightPage;

  beforeEach(() => {
    page = new LongAfterMidnightPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
