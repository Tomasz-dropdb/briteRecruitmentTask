export default class FilterPopup {

    private readonly _closePopupButtonLocator = '[title="Close Prompt"]';
    private readonly _personFilterButtonLocator = 'button span.ipc-chip__text';
    private readonly _morePeopleDropdownLocator = '#Person-filter-select-dropdown';
    private readonly _popupLocator = 'div[data-testid="promptable__pc"]';
    private readonly _personFilterSectionLocator = '[data-testid="image-names-filter-container-test-id"]'
    
    public setPersonFilter(name: string): FilterPopup {
        cy.get(this._personFilterSectionLocator).find(this._personFilterButtonLocator).then(($el) => {          
            if($el.text().includes(name)) {
                cy.get(this._personFilterSectionLocator).find(this._personFilterButtonLocator).contains(name).click({force: true});
            } else {
                cy.get(this._morePeopleDropdownLocator).find('option').contains(name).invoke('text').then($optionText => {
                    cy.get(this._morePeopleDropdownLocator).select($optionText);
                });
            }
        });

        return this;
    }

    public closePopup() {
        cy.get(this._closePopupButtonLocator).click();
    }
}
