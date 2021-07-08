const {setWorldConstructor} = require("@cucumber/cucumber");
const {expect} = require("chai");
const {puppeteer} = require("puppeteer");

class CustomWorld {

    async launchBrowser() {
        this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
    }

    async closeBrowser(){
        await this.browser.close();
    }
    async visit(){
        await this.page.goto("https://buy.chilternrailways.co.uk/account/login");
    }
    async fillLoginForm(){
        await this.page.waitForSelector("#login-form > div:nth-child(1) > input");
        await this.page.type("#login-form > div:nth-child(1) > input", "shadowwalker563@gmail.com")
        await this.page.type("#login-form > div:nth-child(2) > input", "Pa55w0rd!");
        
    }

    async submitLoginForm(){
        await this.page.click("//button[contains(text(),'Log in')]");
    }
    
    async verifyAccountPage(){
        await this.page.waitForSelector("//li[contains(text(),'My account')]")
    }
}

setWorldConstructor(CustomWorld);