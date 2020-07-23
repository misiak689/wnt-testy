import { Selector } from 'testcafe';
class ProductPages {
    constructor () {

        //article number on the ADP
        this.articleNr = Selector('.wnt-pheader__number.span');
        // product line category image
        this.productLineImage = Selector('wnt-image.wnt-pheader__productline');




        // schnittdaten accordion
        this.cuttingDataAccordion = Selector('.wnt-accordion__link').withText('Schnittdaten');
        // technische datten accordion
        this.technicDataAccordion = Selector('.wnt-accordion__link').withText('Technische Daten');
        // product description accordion
        this.productDescriptionAccordion = Selector('.wnt-accordion__link').withText('Produktbeschreibung');
        // download accordion
        this.downloadAccordion = Selector('.wnt-accordion__link').withText('Downloads');
        // regrind accordion
        this.downloadAccordion = Selector('.wnt-accordion__link').withText('Nachschleifservice');



    }
}

export default new ProductPages();