import { AngularCliNg2HighchartsPage } from './app.po';

describe('angular-cli-ng2-highcharts App', function() {
  let page: AngularCliNg2HighchartsPage;

  beforeEach(() => {
    page = new AngularCliNg2HighchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
