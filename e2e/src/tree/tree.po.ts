import { browser, by, element } from 'protractor';

export class TreePage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/tree');
  }

  async isUIDisplayed(): Promise<boolean> {
    return element(by.css('#ui')).isDisplayed();
  }
}
