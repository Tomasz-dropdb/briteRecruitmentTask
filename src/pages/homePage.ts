export default class HomePage {

  private readonly _pageTimeoutMs: number = 5000;
  private readonly _declineCookieButtonLocator = '[data-testid="reject-button"]';
  private readonly _swiperLocator = '.swiper-slide.swiper-slide-active';

  private declineCookies() : HomePage {
    cy.get(this._declineCookieButtonLocator).click();
    
    return this;
  }
  
  public visit(): HomePage {
    cy.visit('https://www.imdb.com');
    cy.get(this._swiperLocator, {timeout: this._pageTimeoutMs}).should('be.visible');

    this.declineCookies();

    return this;
  }
}
