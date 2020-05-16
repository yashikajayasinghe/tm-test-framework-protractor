import{tmLoginPo} from "../page_objects/tm-login-po";
import{Given, When, Then} from "cucumber";
import {browser, protractor, element, $} from 'protractor';
import {setDefaultTimeout} from 'cucumber';
import chai from 'chai';


    let tmLoginPage = new tmLoginPo(); //to get login page elements
    let EC = browser.ExpectedConditions;
    let expect = chai.expect; 

    Given('I navigate to tm homepage', async()=> {
       
        await browser.get("https://www.trademe.co.nz/a/");        
        await browser.wait(EC.elementToBeClickable($(tmLoginPage.login_link_locator)), 5000, 'waiting for the log in link to be clickable');       
        
      });


      Given('I click on log in link', async()=> {

        await tmLoginPage.login_link.click();

      });

      When('I enter Email', async () => {
        
        await browser.wait(EC.visibilityOf($(tmLoginPage.login_form_locator)), 5000,'waiting for the log in modal to be loaded' );
        await tmLoginPage.email.sendKeys('***************'); //intentionally kept as an invalid value to avoid sensitive data to be published in the GitHub project
        
      });

      When('I enter the password', async ()=> {
        
        await tmLoginPage.password.sendKeys("********"); //intentionally kept as an invalid value to avoid sensitive data to be published in the GitHub project
        
      });

      When('I click log in button', async ()=> {
        
        await tmLoginPage.login_Btn.click();
      });

      Then('I will be navigated to the tm homepage', async ()=> {
        
        await browser.wait(EC.invisibilityOf($(tmLoginPage.login_form_locator)), 5000, 'waiting for the log in modal window to go hidden');
      });

      Then('I will see my name as the logged in user', async ()=> {
        
       await browser.wait(EC.visibilityOf($(tmLoginPage.member_profile_image_locator)), 5000, 'waiting for the member profile image to appear');
       
      });

      Then('I see a link to logout', async ()=> {
        
        let logoutTextLable = await tmLoginPage.logout_text_lable.getText();	   
        expect(logoutTextLable).to.equal('Log out');
        
      });




