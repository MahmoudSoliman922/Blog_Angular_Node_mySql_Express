import { BlogAngularPage } from './app.po';

describe('blog-angular App', function() {
  let page: BlogAngularPage;

  beforeEach(() => {
    page = new BlogAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
