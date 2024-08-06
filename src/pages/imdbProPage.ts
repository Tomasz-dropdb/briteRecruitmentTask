import PremiumMembershipPopup from "src/components/premiumMembershipPopup";

export default class ImdbProPage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _loginButtonLocator = '#imdb_pro_login_popover';
    private readonly _loggedOutOverlayLocator = '#logged_out_overlay';
    private readonly _premiumMembershipPopup: PremiumMembershipPopup;

    constructor() {
        this._premiumMembershipPopup = new PremiumMembershipPopup();
    }

    public visit(): ImdbProPage {
      cy.visit('https://www.pro.imdb.com');
      cy.get(this._loginButtonLocator, {timeout: this._pageTimeoutMs}).should('be.visible');
  
      return this;
    }

    public checkContentRestrictedForNotLoggedUser() {
        cy.get(this._loggedOutOverlayLocator).should('exist');

        this._premiumMembershipPopup.isVisible().should('be.true');
        this._premiumMembershipPopup.freeTrialPeriodIsAvailable();
    }
  }
  