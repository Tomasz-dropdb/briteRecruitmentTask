export default class RatingPopup {

    private readonly _popupLocator = 'div[data-testid="promptable__pc"]';
    private readonly _submitRatingButtonLocator = 'button.ipc-rating-prompt__rate-button';

    private getRatingButtonLocator(rating: number): string {
        return `button[aria-label="Rate ${rating}"]`;
    }

    public rateMovie(rating: number) {
        const rateButtonLocator = this.getRatingButtonLocator(rating);

        cy.get(rateButtonLocator).click({force: true});
        cy.get(this._submitRatingButtonLocator).should('be.enabled');
        cy.get(this._submitRatingButtonLocator).click();
    }
}
