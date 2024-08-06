import RatingPopup from "src/components/ratingPopup";

export default class RatingsPage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _headerLocator = '[data-testid="title"] h1';
    private readonly _headerText = 'Ratings';
    private readonly _rateMovieButtonLocator = '[data-testid="rating-button__user-rating"] button';

    private readonly ratingPopup: RatingPopup;
    
    constructor() {
      cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('exist');
      cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('have.text', this._headerText);

      this.ratingPopup = new RatingPopup();
  
      return this;
    }

    public rateMovie(rating: number) {
      cy.get(this._rateMovieButtonLocator).click();

      this.ratingPopup.rateMovie(rating);
    }
  }
