import { Selector } from 'testcafe';

import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import UserPage from "../Pages/UserPage";
import ProductPages from "../Pages/ProductPages";
const dataSet = require('../TestData/TestData');

fixture `AdpTest`
    .page(dataSet.environments.acc);

//ADP to be tested
const  searchPhrase = '5251016000';

test('AdpTest', async t => {
    await HomePage.login(dataSet.users["1"].userId, dataSet.users["1"].password);
    await t
        .maximizeWindow()
        .click(HomePage.searchIcon)
        .click(HomePage.searchInput)
        .typeText(HomePage.searchInput, searchPhrase)
        //.click(Selector('.wnt-oaitem__article-nr.wnt-search__articleitem-nr a').withText(searchPhrase))
        .click(Selector('span').withText(searchPhrase))

        //checking if accordions are displayed and can be clicked
        .click(ProductPages.cuttingDataAccordion)
        .click(ProductPages.technicDataAccordion)
        .click(ProductPages.productDescriptionAccordion)
        .click(ProductPages.downloadAccordion)




});