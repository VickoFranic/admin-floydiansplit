import { Admin.FloydiansplitPage } from './app.po';

describe('admin.floydiansplit App', () => {
  let page: Admin.FloydiansplitPage;

  beforeEach(() => {
    page = new Admin.FloydiansplitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
