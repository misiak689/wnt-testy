import { Selector, t } from 'testcafe';
import UserPage from "./UserPage";

const dataSet = require('../TestData/TestData');

class HomePage {
    constructor () {
        this.searchIcon = Selector('.wnt-header__search');
        this.searchInput = Selector('.wnt-input__field.wnt-search__input');
        //login
        this.userIcon = Selector('.wnt-aflyout ');
        this.loginInput = Selector('input#login_input.wnt-input__field');
        this.passwordInput = Selector('input#login_password.wnt-input__field');
        this.submitButton   = Selector('button.wnt-form__button');
        //user pages, accordion from user icon
        this.meinProfil = Selector('a.wnt-aflyout__item-link ').withText('Mein Profil')
        //cart
        this.cartIcon = Selector('.wnt-cartflyout');
        //view cart
        this.viewCart = Selector('.wnt-button.wnt-button--rect.wnt-button--primary-plus');
        //go to checkout
        this.goToCheckout = Selector('.wnt-button.wnt-button--rect.wnt-button--primary');


    }
    async login (login, password)  {
   await t
       .maximizeWindow()
       .click(this.userIcon)
            .typeText(this.loginInput,login)
            .typeText(this.passwordInput,password)
            .click(this.submitButton)
            .click(this.userIcon)
            .click(this.meinProfil)
            .click(UserPage.userDataAccordion)
            .expect(Selector('input#email.wnt-input__field').value).eql(login)
    }
    async addArticleToCart  (articleNr) {
        await  t
            .maximizeWindow()
            .click(this.searchIcon)
            .click(this.searchInput)
            .typeText(this.searchInput, articleNr)
            .click(Selector('.wnt-search__match'))
            .click(Selector('.wnt-button wnt-addtocart__btn '))
            .click(this.cartIcon)
            .click(this.viewCart)
            .expect(Selector('.wnt-oaitem__article-nr a').innerText).eql(articleNr)
    }



}

export default new HomePage();