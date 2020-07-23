import { Selector } from 'testcafe';

import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
const dataSet = require('../TestData/TestData');


fixture `LoginTest`
    .page(dataSet.environments.acc);

test('CheckOut', async t => {
    await HomePage.login(dataSet.users["1"].userId, dataSet.users["1"].password);
    await CartPage.clearCart();
    await HomePage.addArticleToCart(dataSet.articles["1"]);
    await t

        .click(CartPage.goToCheckoutFromCart)
        .click(CartPage.finishCheckout)
        .click(CartPage.viewOrder)
});
