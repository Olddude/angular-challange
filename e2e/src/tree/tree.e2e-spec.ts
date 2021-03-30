import { browser, logging } from 'protractor';
import { TreePage } from './tree.po';

describe('workspace-project Tree', () => {
  let page: TreePage;

  beforeEach(() => {
    page = new TreePage();
  });

  it('should display ui', async () => {
    await page.navigateTo();
    expect(await page.isUIDisplayed()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
