import DocumentationPage from "../pageObject/documentationPage";
import LandingPage from "../pageObject/landingPage";

const data = require('../../fixtures/data.json')

describe(`Rick and Morty page tests`, () => {

    // let data;
    const landingPage = new LandingPage();
    const documentationPage = new DocumentationPage();

    // before(() => {
    //     cy.fixture('data').then((fixtureData) => {
    //         data = fixtureData
    //     })
    // });

    beforeEach(() => {
        cy.visit('/');
    });

    it(`checks the number of characters, locations and episodes`, () => {
        cy.get('[title="characters"]').should('contain', 826);
        cy.get('[title="locations"]').should('contain', 126);
        cy.get('[title="episodes"]').should('contain', 51);
    });

    it(`checks the number of characters, locations and episodes with fixtures data`, () => {
        cy.get('[title="characters"]').should('contain', data.landingPage.characters);
        cy.get('[title="locations"]').should('contain', data.landingPage.locations);
        cy.get('[title="episodes"]').should('contain', data.landingPage.episodes);
    });

    it(`checks the number of characters, locations and episodes with fixtures data and pageObject`, () => {

        landingPage.getCharactersNumber().then(charactersNumber => {
            expect(charactersNumber).to.equal(data.landingPage.characters);
        });

        landingPage.getLocationsNumber().then(locationsNumber => {
            expect(locationsNumber).to.equal(data.landingPage.locations);
        });

        landingPage.getEpisodesNumber().then(episodesNumber => {
            expect(episodesNumber).to.equal(data.landingPage.episodes);
        });
    });

    it(`checks the request's text`, () => {
        landingPage.goToDocs();

        documentationPage.getGetAllCharactersRequestMethod().then((method) => {
            expect(method).to.equal('GET');
        })

        documentationPage.getGetAllCharactersRequestUrl().then((method) => {
            expect(method).to.equal('https://rickandmortyapi.com/api/character/');
        })
    });

    it(`sends a request to look for characters`, () => {
        landingPage.goToDocs();

        documentationPage.getGetAllCharactersRequestUrl().then((url) => {
            cy.request(url + '?species=alien&status=alive&gender=genderless').then((response) => {
                expect(response.body.info.count).to.equal(data.numberOfCharacters);
            })
        })

    });

    it(`sends a request to look for characters with a function`, () => {
        sendGetCharactersRequest('alien', 'alive', 'genderless', data.numberOfCharacters)
    });

    data.forEachData.forEach((test) => {
        it(`searches for the ${test.species}, ${test.status}, ${test.gender} character`, () => {
            sendGetCharactersRequest(test.species, test.status, test.gender, test.numberOfCharacters)
        })
    })

});

function sendGetCharactersRequest(species = 'human', status = 'alive', gender = 'unknown', numberExpected = 0) {
    cy.request(`https://rickandmortyapi.com/api/character/?species=${species}&status=${status}&gender=${gender}`).then((response) => {
        expect(response.body.info.count).to.equal(numberExpected);
    });
};