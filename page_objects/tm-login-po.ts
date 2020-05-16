import { WebElement, element, by } from "protractor";

export class tmLoginPo{

      email:WebElement;
      password:WebElement;
      login_Btn:WebElement;
      login_link:WebElement;
      login_link_locator:string;
      login_form_locator:string;
      member_profile_image_locator:string;
      logout_text_lable:WebElement;
      



    constructor(){
        this.email    = element(by.css('tm-login-form form tg-input-container input[name=email]'));
        this.password = element(by.css('tm-login-form form tg-input-container input[name=password]')); 
        this.login_Btn = element(by.css('tm-login-form form button[type=submit]'));
        this.login_link_locator = 'tm-shell-log-in-out div a[class=logged-out__log-in]'; //need to use this variable when calling methods in the ProtractorExpectedConditions class in the step definitions file.
        this.login_link = element(by.css(this.login_link_locator));
        this.login_form_locator = 'tm-login-form';
        this.member_profile_image_locator = 'tm-member-profile-image div.tm-member-profile-image__container div.tm-member-profile-image__placeholder';
        this.logout_text_lable = element.all(by.css('tm-shell-log-in-out div.logged-in__actions span')).first(); //multiple logout links are available in the DOM  
        

    }

}