class LandingPage {

    getCharacters() {
        return cy.get('[title="characters"]');
    }

    getLocations() {
        return cy.get('[title="locations"]');
    }

    getEpisodes() {
        return cy.get('[title="episodes"]');
    }

    getNumberOf(element) {
        return element.invoke('text').then((text) => {
            return parseInt(text.split(':')[1].trim(), 10);
        });
    }

    getCharactersNumber() {
        return this.getNumberOf(this.getCharacters());
    }

    getLocationsNumber() {
        return this.getNumberOf(this.getLocations());
    }

    getEpisodesNumber() {
        return this.getNumberOf(this.getEpisodes());
    }

    getDocsButton() {
        return cy.get('[name="/documentation"]');
    }

    goToDocs() {
        this.getDocsButton().click();
    }
}

export default LandingPage;
