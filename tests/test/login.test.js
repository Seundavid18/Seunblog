import { Builder, Browser, By, Key, until, error } from 'selenium-webdriver'
import { assert, expect } from 'chai'


describe("Login test", function() {

    it("Test the login page", function(done) {

        let driver = new Builder().forBrowser(Browser.CHROME).build();

        // Navigate to the login page
        driver.get('https://seundavidblog.azurewebsites.net/login');

        // Maximize browser window
        driver.manage().window().maximize();

        // Locate and insert text into email field
        var username_input = driver.findElement(By.id('username'));
        username_input.sendKeys('seundavid', Key.RETURN);

        // Locate and insert text into email field
        var password_input = driver.findElement(By.id('password'));
        password_input.sendKeys('password', Key.RETURN);

    
        // Locate button by its text "Sign In"
        var sign_in = driver.findElement(By.xpath('//button[text()="Login"]'));
        sign_in.click();
    
        //Assert that the heading account number is present"
        var home_page_heading = driver.findElement(By.xpath('//span[text()="SEUN-DAVID"]'));
        assert(home_page_heading.isDisplayed('Expected heading "SEUN-DAVID" not found'));

        done();

        // Close the browser
        driver.quit();

    }).timeout(10000);

});