import { MyDreamPage } from './app.po';

describe('my-dream App', () => {
  let page: MyDreamPage;

  beforeEach(() => {
    page = new MyDreamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
