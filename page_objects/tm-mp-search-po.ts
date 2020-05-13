import { ElementFinder, ElementArrayFinder, element, by } from "protractor";

export class tmMPSearch{

    catSugesstionHeading:ElementFinder;
    allListingCards:ElementArrayFinder;
    

    constructor(){
        this.catSugesstionHeading = element(by.css('tm-category-suggestions h2[class="tm-category-suggestions__heading ng-star-inserted"]'));
        this.allListingCards = element.all(by.css('tm-search-results tm-search-card-switcher'));

    }

}