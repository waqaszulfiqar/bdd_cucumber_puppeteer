const {Given, When, Then, Before, After} = require ("@cucumber/cucumber");
const puppeteer = require('puppeteer');


Before(async function(){
    // return await this.launchBrowser();
    const browser = await puppeteer.launch({headless: false});
    // const page = await this.browser.newPage();
});

After(async function(){
return await this.closeBrowser();
});

Given("I open the login page", async function(){
    return await this.visit();
});

When("I fill the login form", async function(){
    return await this.fillLoginForm();
});

When("I click on the login button", async function(){
    return await this.submitLoginForm();
});

Then("I should be able to see My Account Screen", async function(){
    return await this.verifyAccountPage();
});