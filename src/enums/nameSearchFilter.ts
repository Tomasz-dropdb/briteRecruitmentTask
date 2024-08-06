export enum NameSearchFilter {
    AdultNames = '#adultNamesAccordion',
    AwardsAndRecognition = '#awardsAccordion',
    BirthDate = '#birthDateAccordion',
    Birthday = '#birthdayAccordion',
    Credits = '#filmographyAccordion',
    DeathDate = '#deathDateAccordion',
    GenderIdentity = '#genderIdentityAccordion',
    Name = '#nameTextAccordion',
    PageTopics = '#pageTopicsAccordion'
}

// POC on object us age over enum

const NameSearchFilterDict = { 
    AdultNames:  {text: 'Adult names', id: '#adultNamesAccordion' },
    AwardsAndRecognition: {text: 'Awards & recognition', id: '#awardsAccordion' },
    BirthDate: {text: 'Birth date', id: '#birthDateAccordion' },
    Birthday: {text: 'Birthday', id: '#birthdayAccordion' },
    Credits: {text: 'Credits', id: '#filmographyAccordion' },
    DeathDate: {text: 'Death date', id: '#deathDateAccordion' },
    GenderIdentity: {
        text: 'Gender identity',
        id: '#genderIdentityAccordion',
        options: {
            female: {text: 'Female', locator: '[data-testid="test-chip-id-FEMALE"]'},
            male: {text: 'Male', locator: '[data-testid="test-chip-id-MALE"]'},
            nonBinary:  {text: 'Non-binary', locator: '[data-testid="test-chip-id-NON_BINARY"]'},
            other:  {text: 'Other', locator: '[data-testid="test-chip-id-OTHER"]'}
        } 
    },
    Name: {text: 'Name', id: '#nameTextAccordion' },
    PageTopics: {text: 'Page topics', id: '#pageTopicsAccordion' }
  }
