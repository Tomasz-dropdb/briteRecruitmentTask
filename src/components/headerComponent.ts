import { MenuItem } from "src/enums/menuItems";
import BasePage from "src/pages/basePage";
import CelebrityPage from "src/pages/celebrityPage";

export default class HeaderComponent {

  private static readonly _menuButtonLocator = '#imdbHeader-navDrawerOpen';
  private static readonly _searchFieldLocator = '#suggestion-search';
  private static readonly _searchButtonLocator = '#suggestion-search-button';

  // Static component POC. Header component will be always accessible - no matter which page would be open. Hence utilizing static methods for ease of access.

  private static getMenuOptionLocator(option: MenuItem): string {
    return `//span[text()="${option.toString()}"]/parent::a`;
  }

  public static selectMenuOption<T extends BasePage>(pageClass: new () => T, option: MenuItem): T {
    cy.get(this._menuButtonLocator).click();

    const optionXpathLocator = this.getMenuOptionLocator(option);
    cy.xpath(optionXpathLocator).click({force: true});

    return new pageClass();
  }

  public static goToCelebrityPage(name: string): CelebrityPage {
    cy.get(this._searchFieldLocator).type(name);
    cy.get(this._searchButtonLocator).click();

    const clebrityPageLink = cy.xpath(`//section[@data-testid="find-results-section-name"]//a[text()="${name}"]`);
  
    clebrityPageLink.click();

    return new CelebrityPage(name);
  }
}
