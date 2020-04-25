import { ElementFinder, element, by } from "protractor"


export class tmHomePo{

    searchTextBox:ElementFinder;
    searchButton:ElementFinder;
    searchSugesstions:ElementFinder;
    


    constructor(){

        this.searchTextBox = element(by.id('search'));
        this.searchButton = element(by.css('tm-global-search button[class="tm-global-search__search-form-submit-button o-button2--primary o-button2"]'));        
        this.searchSugesstions = element(by.css('div.tm-global-search__search-suggestions'));

    }



}