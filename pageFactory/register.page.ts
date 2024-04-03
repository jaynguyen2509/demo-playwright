import { BrowserContext, Locator, Page } from "@playwright/test";

export default class RegisterPage{
    page: Page;
    context: BrowserContext;
    firstName: Locator;
    lastName: Locator;
    email: Locator;
    telephone: Locator;
    password: Locator;
    cfPassword: Locator;
    subscribe: Locator;
    agreePolicyCheckbox: Locator;
    continueRegisBtn: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
        this.firstName = page.locator("#input-firstname");
        this.lastName = page.locator("input[id='input-lastname']");
        this.email = page.locator(`input[id="input-email"]`)
        this.telephone = page.locator(`input[id="input-telephone"]`);
        this.password = page.locator(`id="input-password"`);
        this.cfPassword = page.locator(`id="input-confirm"`);
        this.subscribe = page.locator(``);
        this.agreePolicyCheckbox = page.locator(``)
        this.continueRegisBtn = page.locator(``);

    }

    async enterFirstName(firstName: string){
        await this.page.locator("#input-firstname").type(firstName);
    }

    async enterLastName(lastName: string){
        await this.page.locator("#input-firstname").type(lastName);
    }

    async enterEmail(email: string){
        await this.page.locator("#input-firstname").type(email);
    }
}