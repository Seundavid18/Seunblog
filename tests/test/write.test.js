import { Builder, Browser, By, Key, until, error } from 'selenium-webdriver'
import { assert, expect } from 'chai'


describe("Write test", function() {


    it("Write a blog story", async function(done) {

        let driver = new Builder().forBrowser(Browser.CHROME).build();

        // Navigate to the seundavidblog page
        driver.get('https://seudavidblog.azurewebsites.net');

        // Maximize browser window
        driver.manage().window().maximize();

        // Locate Login page by its text "LOGIN"
        var nav_login = driver.findElement(By.xpath('//a[text()="LOGIN"]'));
        nav_login.click(); 

        // Locate and insert text into email field
        var username_input = driver.findElement(By.id('username'));
        username_input.sendKeys('seundavid', Key.RETURN);

        // Locate and insert text into email field
        var password_input = driver.findElement(By.id('password'));
        password_input.sendKeys('password', Key.RETURN);

    
        // Locate button by its text "Sign In"
        var sign_in = driver.findElement(By.xpath('//button[text()="Login"]'));
        sign_in.click();

        //Wait some time to observe result
        this.timeout(5000);

        // Locate Write page by its text "WRITE"
        var nav_write = driver.findElement(By.xpath('//a[text()="WRITE"]'));
        nav_write.click();    

        // Locate and insert title into title field
        var write_title = driver.findElement(By.id('writeTitle'));
        write_title.sendKeys('Testing Write Page', Key.RETURN);

        // Locate and insert story into story field
        var write_story = driver.findElement(By.id('writeStory'));
        write_story.sendKeys('JUnit testing for seundavidblog app write page', Key.RETURN);

        // Locate button by its text "Publish"
        var publish_btn = driver.findElement(By.id("publishBtn"));
        publish_btn.click(); 

        // //Assert that the heading "Author is present"
        var write_page = driver.findElement(By.xpath('//span[text()="Author :"]'));
        assert(write_page.isDisplayed('Expected heading "Author :" not found'));

        done();

        // Close the browser
        driver.quit();

    }).timeout(10000)


});