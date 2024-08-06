import BasePage from "./basePage";
import PhotosPage from "./photosPage";
import RatingsPage from "./ratingsPage";

export default class ProductionPage extends BasePage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _headerLocator = '[data-testid="hero__pageTitle"]';
    private readonly _imdbRatingButtonXpathLocator = '//h1/parent::div/following-sibling::div//a[@aria-label="View User Ratings"]'
    private readonly _photosSectionLocator = '[data-testid="Photos"]';
    private readonly _photosPageLinkLocator = '[data-testid="photos-title"] a';
    
    constructor() {
      super();
      cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('exist');
  
      return this;
    }
  
    public goToRatingsPage(): RatingsPage {
        cy.xpath(this._imdbRatingButtonXpathLocator).click();

        return new RatingsPage();
    }

    public goToPhotosPage(): PhotosPage {
      cy.get(this._photosSectionLocator).scrollIntoView();
      cy.get(this._photosPageLinkLocator).click();

      return new PhotosPage();
    }
  }
