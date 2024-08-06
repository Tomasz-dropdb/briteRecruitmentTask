import ProductionPage from "./productionPage";

export default class TopBoxOfficePage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _movieLinkLocator = 'a.ipc-title-link-wrapper';
    private readonly _titleLocator = '[data-testid="chart-layout-sidebar-title-container"]';
    private readonly _titleText = 'Top Box Office';
    private readonly _topTenMoviesLocator = 'li.ipc-metadata-list-summary-item';

    // This class could extend ChartPage class. See POC within => Top250TvShows class.

    constructor() {
        const titleElement = cy.get(this._titleLocator, {timeout: this._pageTimeoutMs});
        
        titleElement.should('be.visible');
        titleElement.should('contains.text', this._titleText);
    }

    private getMovieItemByPosition(position: number) {
        return cy.get(this._topTenMoviesLocator).eq(position-1);
    }

    private getMovieLinkByPosition(position: number) {
        return this.getMovieItemByPosition(position).find(this._movieLinkLocator);
    }

    public openMoviePageByPosition(position: number): ProductionPage {
        this.getMovieLinkByPosition(position).click();

        return new ProductionPage();
    }
}
