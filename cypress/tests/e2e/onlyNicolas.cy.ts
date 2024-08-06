import CelebrityPage from "src/pages/celebrityPage";
import HeaderComponent from "src/components/headerComponent";
import HomePage from "src/pages/homePage";
import ImdbProPage from "src/pages/imdbProPage";
import { Role } from "src/enums/roles";

describe('Nicolas Cage', () => {
  it('Open Upcoming Actor\'s Movie', () => {    
    const homePage: HomePage = new HomePage();
    homePage.visit();

    const nicolasPage: CelebrityPage = HeaderComponent.goToCelebrityPage('Nicolas Cage');
    
    const imdbProPage: ImdbProPage = nicolasPage.openFirstUpcomingInProductionMovie(Role.Acotr);
    imdbProPage.checkContentRestrictedForNotLoggedUser();

    cy.url().should('include', 'pro.imdb.com');
  })
})
