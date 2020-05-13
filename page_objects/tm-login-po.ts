import { WebElement, element, by } from "protractor";

export class tmLoginPo{

      email:WebElement;
      password:WebElement;
      login_Btn:WebElement;



    constructor(){
        this.email    = element(by.css('tm-login-form form tg-input-container input[name=email]'));
        this.password = element(by.css('tm-login-form form tg-input-container input[name=password]')); 
        this.login_Btn = element(by.css('tm-login-form form button[type=submit]'));

    }

}