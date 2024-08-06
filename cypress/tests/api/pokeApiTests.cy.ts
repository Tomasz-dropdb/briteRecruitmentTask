import Berry from "src/api/models/pokeapi/Berry"
import BerryFlavor, { BerryPotency } from "src/api/models/pokeapi/BerryFlavor";
import PokeApi from "src/api/rest/pokeApi"

context("Poke Api Berries Tests", () => {

  const apiClient: PokeApi = new PokeApi();

  const getBerryByIdTestData = [
    {id: 1, responseCode: 200, isValid: true},
    {id: 10, responseCode: 200, isValid: true},
    {id: -1, responseCode: 404, isValid: false}
  ];

  const getBerryByNameTestData = [
    {name: 'chesto', responseCode: 200, isValid: true},
    {name: 'salac', responseCode: 200, isValid: true},
    {name: 'nonExistingName', responseCode: 404, isValid: false}
  ];

  const getBerryFlavorByNameTestData = [
    {name: 'spicy', responseCode: 200, isValid: true},
    {name: 'sweet', responseCode: 200, isValid: true},
    {name: 'disgusting', responseCode: 404, isValid: false}
  ];
  
  getBerryByIdTestData.forEach((testData => {

    it(`Get Berry at id: ${testData.id}`, () => {

      apiClient.getBerryById(testData.id).then((response) => {
        expect(response.status).to.eq(testData.responseCode);

        const berry: Berry = Object.assign(new Berry(), response.body);
  
        if(testData.isValid) {
          expect(berry.id).eq(testData.id);
        } else {
          expect(berry.id).is.undefined;
        }
      })
    })
  }))

  getBerryByNameTestData.forEach((testData => {

    it(`Get Berry with name: ${testData.name}`, () => {

      apiClient.getBerryByName(testData.name).then((response) => {
        expect(response.status).to.eq(testData.responseCode);

        const berry: Berry = Object.assign(new Berry(), response.body);
  
        if(testData.isValid) {
          expect(berry.name).eq(testData.name);
        } else {
          expect(berry.name).is.undefined;
        }
      })
    })
  }))

  getBerryFlavorByNameTestData.forEach((testData => {

    it(`Get BerryFlavor with name: ${testData.name}`, () => {

      apiClient.getBerryFlavorByName(testData.name).then((response) => {
        expect(response.status).to.eq(testData.responseCode);

        const berryFlavor: BerryFlavor = Object.assign(new BerryFlavor(), response.body);
  
        if(testData.isValid) {
          expect(berryFlavor.name).eq(testData.name);
        } else {
          expect(berryFlavor.name).is.undefined;
        }
      })
    })
  }))

  it('Get the most potent spicy Berry', () => {

    apiClient.getBerryFlavorByName('spicy').then((response) => {
      expect(response.status).to.eq(200);

      const berryFlavor: BerryFlavor = Object.assign(new BerryFlavor(), response.body);

      const berriesByPotency: BerryPotency[] = berryFlavor.berries.sort((p1, p2) => {
          if(p1.potency < p2.potency) return 1;
          if(p1.potency > p2.potency) return -1;
          return 0;
      });

      const theMostPotentBerry = berriesByPotency[0].berry.name;

      apiClient.getBerryByName(theMostPotentBerry).then((response) => {
          expect(response.status).to.eq(200);

          const berry: Berry = Object.assign(new Berry(), response.body);

          expect(berry.name).eq(theMostPotentBerry);
          expect(berry.flavors[0].flavor.name).eq('spicy');
          expect(berry.flavors[0].potency).gt(1);
      })

    })
  })
})
