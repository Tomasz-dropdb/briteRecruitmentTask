import ChartPage from "./chartPage";
import ProductionPage from "./productionPage";

export default class Top250TvShowsPage extends ChartPage {

    private readonly _titleLocator: string;
    private readonly _titleText: string;

    // Another POC. This time on how can we keep pageLoad validation withn BaseClass. Locators will be included within constructor as local variables to be later assigned to class 
    // properties.

    constructor() {
        const titleLocator = '[data-testid="chart-layout-sidebar-title-container"] h1';
        const titleText = 'Top 250 TV Shows';

        super(titleLocator, titleText);

        this._titleLocator = titleLocator;
        this._titleText = titleText;
    }

    public openTvShowByPosition(position: number) {
        return super.openItemPageByPosition<ProductionPage>(ProductionPage, position);
    }

    public openTvShowByTitle(title: string) {
        return super.openItemPageByTitle<ProductionPage>(ProductionPage, title);
    }
}
