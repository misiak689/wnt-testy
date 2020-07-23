import { Selector, t } from 'testcafe';
import HomePage from "./HomePage";

class CartPage {
    constructor () {

        //go to checkout button
        this.goToCheckoutFromCart = Selector('.wnt-cart__sum-checkout.wnt-button.wnt-button--rect.wnt-button--primary');
        //article row - number

        //finish checkout without changes
        this.finishCheckout = Selector('.wnt-checkout__submit-btn');

        //open Ihre Bestellung
        this.viewOrder = Selector('.wnt-ocomplete__showorder');
        //clear whole cart
        this.clearCartButton = Selector('button.wnt-cart__clear');



    }
    async clearCart () {
        await  t
            .maximizeWindow()
            .click(HomePage.cartIcon)
            .click(HomePage.viewCart)

        if (await this.clearCartButton.exists) {
            await t
            .click(this.clearCartButton)
        }
    }
}

export default new CartPage();