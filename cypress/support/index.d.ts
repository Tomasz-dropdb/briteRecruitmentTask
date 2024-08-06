declare namespace Cypress {
    interface Chainable {
      isVisible(locator: string): Chainable<boolean>;
    }
  }
  