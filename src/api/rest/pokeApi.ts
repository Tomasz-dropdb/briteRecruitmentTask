export default class PokeApi {

    private readonly _baseUrl: string = 'https://pokeapi.co/api/v2';

    public getBerryById(id: number) {
        return cy.request({method: 'GET', url: `${this._baseUrl}/berry/${id}`, failOnStatusCode: false});
    }
    
    public getBerryByName(name: string) {
        return cy.request({method: 'GET', url: `${this._baseUrl}/berry/${name}`, failOnStatusCode: false});
    }

    public getBerryFlavorById(id: number) {
        return cy.request({method: 'GET', url: `${this._baseUrl}/berry-flavor/${id}`, failOnStatusCode: false});
    }

    public getBerryFlavorByName(name: string) {
        return cy.request({method: 'GET', url: `${this._baseUrl}/berry-flavor/${name}`, failOnStatusCode: false});
    }
}
