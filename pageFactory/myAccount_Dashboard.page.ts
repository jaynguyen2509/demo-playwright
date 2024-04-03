import { BrowserContext, Locator, Page } from "@playwright/test";

export default class MyAccount_Dashboard{
    page: Page
    context: BrowserContext
    pageContent: Locator

    constructor (page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
        this.pageContent = page.locator(`//div[@id='content']`);
    }
}