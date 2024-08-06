import { NameSearchFilter} from "src/enums/nameSearchFilter";

export default class AdvancedSearchPage {

    private readonly _pageTimeoutMs: number = 5000;
    private readonly _activeFiltersLocator = 'div.ipc-chip-list__scroller svg.ipc-icon--clear';
    private readonly _birthDateStartLocator = '[data-testid="birthDate-start"]';
    private readonly _birthDateEndLocator = '[data-testid="birthDate-end"]';
    private readonly _birthdayInputLocator = '[aria-label="Enter birthday"]';
    private readonly _headerLocator = 'h1.ipc-title__text';
    private readonly _resultItemDescriptionLocator = '[data-testid="dli-bio"]';
    private readonly _resultItemHeaderLocator = 'h3.ipc-title__text';
    private readonly _resultItemLocator = '.ipc-avatar a';
    private readonly _resultListLocator = 'ul.ipc-metadata-list li';
    private readonly _seeResultButtonLocator = '[data-testid="adv-search-get-results"]';

    private readonly _headerTextArray = ['Advanced', 'search'];
    
    constructor() {
      cy.get(this._headerLocator, {timeout: this._pageTimeoutMs})
        .should('exist')
        .and('contain', this._headerTextArray[0])
        .and('contain', this._headerTextArray[1]);
  
      return this;
    }

    public searchResult(): AdvancedSearchPage {
        cy.get(this._seeResultButtonLocator).click();

        return this;
    }

    public openResultByPosition(position: number) {
        this.getAllResultItems().find(this._resultItemLocator).eq(position-1).click();
    }

    public tryToOpenFirstLinkFromTheDescription() {
        this.getAllResultItems().eq(0).find(this._resultItemDescriptionLocator).then(($element) => {
            const descriptionLinks = $element.find('a');

            if(descriptionLinks.length > 0) {
                descriptionLinks[0].click();
            } else {
                this.getAllResultItems().eq(0).within(() => {
                    cy.get(this._resultItemHeaderLocator).invoke('text').then(($name) => {
                        console.info(`Not possible to find any links in description for ${$name}`);
                    });
                });
            }
        });
    }

    // Filters shall be represented by a separate classes that shares common interface. Depending on instance.tag value, a more generic method setFilter would be used:
    //
    // ***** Example implementation *****
    //
    // public setFilter(filter: IFilter, value: string): AdvancedSearchPage {
    //  this.clearAllFilters();
    //  switch (filter.tag) {
    //      case: FilterTag: input: {
    //          this.expandFilter(filter.type);
    //          cy.get(filter.locators.input).type(value, {delay:0});
    //          break;
    //      }
    //      case: FilterTag: button: {
    //          this.expandFilter(filter.type);
    //          cy.get(filter.locators.input).contains(value).click({force: true});
    //          break;
    //      }
    //      ...
    //  }
    //}

    public setBirthdayFilter(value: string): AdvancedSearchPage {
        this.clearAllFilters();
        this.expandFilter(NameSearchFilter.Birthday);
        
        cy.get(this._birthdayInputLocator).type(value).type('{enter}');

        return this;
    }

    public setBirthDateFilter(from: string, to: string): AdvancedSearchPage {
        this.clearAllFilters();
        this.expandFilter(NameSearchFilter.BirthDate);
        
        cy.get(this._birthDateStartLocator).type(from, {delay: 0});
        cy.get(this._birthDateEndLocator).type(to, {delay: 0});

        return this;
    }

    private clearAllFilters(): AdvancedSearchPage {
        cy.get(this._activeFiltersLocator).then(($elements) => {
            cy.get(this._activeFiltersLocator).first().click({force: true});

            if($elements.length > 1) {
                this.clearAllFilters();
            }
        })

        return this;
    }

    private expandFilter(filter: NameSearchFilter): AdvancedSearchPage {
        const filterLocator = filter.toString();
        
        cy.get(filterLocator).then(($element) => {
            if($element[0].className.includes('expanded')) {
                return;
            }
            
            cy.get(filterLocator).click();
        });

        return this;
    }

    private getAllResultItems(): Cypress.Chainable {
        return cy.get(this._resultListLocator);
    }
  }
