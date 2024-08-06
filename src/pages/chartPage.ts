import BasePage from "./basePage";

export default class ChartPage {

    protected readonly _pageTimeoutMs: number = 5000;
    private readonly _itemsListLocator = 'li.ipc-metadata-list-summary-item';
    private readonly _itemLinkLocator = 'a.ipc-title-link-wrapper';

    constructor(titleLocator: string, titleText: string) {
        const titleElement = cy.get(titleLocator, {timeout: this._pageTimeoutMs});
        
        titleElement.should('be.visible');
        titleElement.should('contains.text', titleText);
    }

    protected getItemByPosition(position: number) {
        return cy.get(this._itemsListLocator).eq(position-1);
    }

    protected getItemByTitle(title: string) {
        return cy.get(this._itemsListLocator).contains(title);
    }

    protected getItemLinkByPosition(position: number) {
        return this.getItemByPosition(position).find(this._itemLinkLocator);
    }

    protected openItemPageByPosition<T extends BasePage>(pageClass: new () => T, position: number): T {
        this.getItemLinkByPosition(position).click();
        
        return new pageClass();
      }

      protected openItemPageByTitle<T extends BasePage>(pageClass: new () => T, title: string): T {
        this.getItemByTitle(title).click({force: true});
        
        return new pageClass();
      }
}
