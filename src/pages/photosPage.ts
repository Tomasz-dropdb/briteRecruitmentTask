import FilterPopup from "src/components/filterPopup";

export default class PhotosPage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _actorLinkNameLocator = 'a[href^="/name"]';
    private readonly _filterButtonLocator = 'button[aria-label="Filter"]';
    private readonly _galleryButtonLocator = '[data-testid="mv-gallery-button"]';
    private readonly _headerLocator = '[data-testid="title"] h1';
    private readonly _photosListLocator = '[data-testid="section-images"] a';

    private readonly _headerText = 'Photos';

    private filterPopup: FilterPopup = new FilterPopup();
    
    constructor() {
        cy.get(this._galleryButtonLocator).click();
        cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('exist');
        cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('have.text', this._headerText);
  
        return this;
    }

    public filterPhotosByPerson(name: string) {
        this.openFilterPopup();

        this.filterPopup.setPersonFilter(name);
        this.filterPopup.closePopup();

        // Reload for DOM refresh after dynamic filtering of the page.
        cy.reload();
    }

    public verifyPhotoBelongsToActor(name: string) {
        cy.get(this._actorLinkNameLocator).first().invoke('text').should('equal', name);
    }

    private openFilterPopup() {
        cy.get(this._filterButtonLocator).click();
    }

    public selectPhotoByPosition(position: number) {
        cy.get(this._photosListLocator).eq(position -1).click();
    }
}
