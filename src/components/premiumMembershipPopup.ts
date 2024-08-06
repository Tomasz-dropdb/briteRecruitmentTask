export default class PremiumMembershipPopup {

    private readonly _freeTrialButtonLocator = 'span.a-button span.a-size-small';
    private readonly _popupLocator = '#logged_out_upsell';
    
    private readonly _freeTrialButtonText = ' Try IMDbPro Premium for free';

    public isVisible(): Cypress.Chainable<boolean> {
        return cy.isVisible(this._popupLocator);
    }

    public freeTrialPeriodIsAvailable() {
        const freeTrialButton = cy.get(this._popupLocator).find(this._freeTrialButtonLocator);

        freeTrialButton.should('exist');
        freeTrialButton.should('be.visible');
        freeTrialButton.should('contain.text', this._freeTrialButtonText);
    }
}
