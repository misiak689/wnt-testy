import { Selector } from 'testcafe'; // first import testcafe selectors

import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
const dataSet = require('../TestData/TestData');


fixture `Getting Started`// declare the fixture
    .page(dataSet.environments.acc);  // specify the start page


const  searchPhrase = 'hss';

test('My first test', async t => {
    await t
        .maximizeWindow()
        .click(HomePage.searchIcon)
        .click(HomePage.searchInput)
        .typeText(HomePage.searchInput, searchPhrase)
        .expect(HomePage.searchInput.value).eql(searchPhrase)
        .pressKey('enter')
        .pressKey('enter')
        .expect(Selector('.wnt-list__results').visible).ok()
        .expect(SearchPage.searchInputCollapsed.innerText).eql(searchPhrase)
        .expect(Selector('.wnt-link.wnt-link--icon.wnt-list__details').innerText).eql('Details ausblenden')

});