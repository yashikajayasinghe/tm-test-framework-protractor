import { ElementFinder, element, by } from "protractor";

export class tmMPSearch{

    catSugesstionHeading:ElementFinder;

    constructor(){
        this.catSugesstionHeading = element(by.css('tm-category-suggestions h2[class="tm-category-suggestions__heading"]'));

    }

}