class DocumentationPage {

    getGetAllCharactersRequest() {
        return cy.get('#get-all-characters').then((element) => {
            return element.nextUntil('.language-shell').first().next();
        });
    }

    getGetAllCharactersRequestMethod(){
        return this.getGetAllCharactersRequest().then((element) => {
            return element.text().split(' ')[0].trim();
        })
    }

    getGetAllCharactersRequestUrl(){
        return this.getGetAllCharactersRequest().then((element) => {
            return element.text().split(' ')[1].trim() + '/';
        })
    }
}

export default DocumentationPage;
