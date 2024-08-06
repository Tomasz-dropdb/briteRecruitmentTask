import HeaderComponent from "src/components/headerComponent";
import HomePage from "src/pages/homePage";
import { MenuItem } from "src/enums/menuItems";
import TopBoxOfficePage from "src/pages/topBoxOfficePage";
import ProductionPage from "src/pages/productionPage";
import Top250TvShowsPage from "src/pages/top250TvShowsPage";
import PhotosPage from "src/pages/photosPage";
import RatingsPage from "src/pages/ratingsPage";
import AdvancedSearchPage from "src/pages/advancedSearchPage";
import DateUtils from "src/utils/dateUtils";
import { DatePart } from "src/enums/dateParts";

describe('IMDb interactions', () => {

    context('720p resolution', () => {
        beforeEach(() => {
            new HomePage().visit();
            cy.viewport(1280, 720)
        })

        it('Rate second top box office movie', () => {    
            const topBoxOfficePage: TopBoxOfficePage = HeaderComponent.selectMenuOption<TopBoxOfficePage>(TopBoxOfficePage, MenuItem.TopBoxOffice);

            const moviePage: ProductionPage = topBoxOfficePage.openMoviePageByPosition(2);
            
            const ratingsPage: RatingsPage = moviePage.goToRatingsPage();
            ratingsPage.rateMovie(5);

            cy.url().should('include', 'signin');
        })

        it('Display Danny Trejo\'s photo', () => {    
            const actorName = 'Danny Trejo';

            const top250TvShowsPage: Top250TvShowsPage = HeaderComponent.selectMenuOption<Top250TvShowsPage>(Top250TvShowsPage, MenuItem.Top250TvShows);

            const moviePage: ProductionPage = top250TvShowsPage.openTvShowByTitle('Breaking Bad');
            
            const photosPage: PhotosPage = moviePage.goToPhotosPage();
            photosPage.filterPhotosByPerson(actorName);
            photosPage.selectPhotoByPosition(2);

            photosPage.verifyPhotoBelongsToActor(actorName);
        })

        it('Take Screenshot of Celebrity Born Yesterday', () => {
            const yesterdayDate: Date = DateUtils.GetYesterdayDate();
            const stringFormattedDate = DateUtils.ConvertDateToString(yesterdayDate, 'MM-dd');

            const advancedSearchPage: AdvancedSearchPage = HeaderComponent.selectMenuOption<AdvancedSearchPage>(AdvancedSearchPage, MenuItem.BornToday);
            advancedSearchPage.setBirthdayFilter(stringFormattedDate)
            .searchResult()
            .openResultByPosition(3);

            cy.screenshot('CelebrityBornYesterday', {capture: 'viewport', overwrite: true});
        })

        it('Try to Take Screenshot from bio of Celebrity Born 40 years ago', () => {
            const today: Date = DateUtils.GetToday();
            const todayMinus40Years = DateUtils.ModifyDate(today, -40, DatePart.Year);
            const stringFormattedDate = DateUtils.ConvertDateToString(todayMinus40Years, 'yyyy-MM-dd');

            const advancedSearchPage: AdvancedSearchPage = HeaderComponent.selectMenuOption<AdvancedSearchPage>(AdvancedSearchPage, MenuItem.BornToday);
            advancedSearchPage.setBirthDateFilter(stringFormattedDate, stringFormattedDate)
            .searchResult()
            .tryToOpenFirstLinkFromTheDescription();

            cy.screenshot('BioLinkResult', {capture: 'viewport', overwrite: true});
        })
    })
})
