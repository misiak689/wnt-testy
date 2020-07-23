import { Selector } from 'testcafe';
class UserPage {
    constructor () {
        this.userDataAccordion = Selector('.wnt-accordion__link').withText('Persönliche Daten');

    }
}

export default new UserPage();