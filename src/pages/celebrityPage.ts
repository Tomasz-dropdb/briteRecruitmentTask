import { Role } from "src/enums/roles";
import ImdbProPage from "./imdbProPage";

export default class CelebrityPage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _creditsSectionLocator = '#credits';
    private readonly _headerLocator = '[data-testid="hero__primary-text"]';
    private readonly _personalDetailsSectionLocator = '#personalDetails';
    
    constructor(name: string) {
      cy.get(this._headerLocator, {timeout: this._pageTimeoutMs}).should('have.text', name);
  
      return this;
    }
  
    private getUpcomingProjects(role: Role) {
        const locator = `#${role.toString().toLowerCase()}-upcoming-projects`;

        return cy.get(locator);
    }

    public openFirstUpcomingInProductionMovie(role: Role) : ImdbProPage {
        cy.get(this._creditsSectionLocator).scrollIntoView();
        this.getUpcomingProjects(role).click();
        this.getUpcomingProjects(role).contains('a', 'In Production').first().click();

        return new ImdbProPage();
    }
  }
