import { Selector } from 'testcafe';
class SearchPage {
    constructor () {
        this.searchIcon = Selector('.wnt-header__search');
        this.searchInputCollapsed = Selector('.wnt-search__query');
    }
}

export default new SearchPage();