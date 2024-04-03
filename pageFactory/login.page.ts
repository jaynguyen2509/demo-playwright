import { BrowserContext, Locator, Page, expect } from "@playwright/test";
import publicURL from '../data/url.json'
import MyAccount_Dashboard from "./myAccount_Dashboard.page";

export default class LoginPage{
    page: Page;
    context: BrowserContext;
    emailInput: Locator;
    passwordInput: Locator;
    forgottenPasswordLink: Locator;
    loginBtn: Locator;
    newCustomerConinueBtn: Locator;
    loginFailAlert: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
        this.emailInput = page.getByPlaceholder('E-Mail Address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.forgottenPasswordLink = page.getByText('Forgotten Password',{ exact: true });
        this.loginBtn = page.locator("//input[@value='Login']");
        this.newCustomerConinueBtn = page.getByText('Continue',{exact: true})
        this.loginFailAlert = page.locator(`//div[@class='alert alert-danger alert-dismissible']`);

    }
    async navigateToLogin(){
        await this.page.goto('/index.php?route=account/login');
    }

    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }


    //verify
    async verifyLoginFail(){
        const failMessage :string = ' Warning: No match for E-Mail Address and/or Password.';
        await this.loginFailAlert.isVisible();
        await expect(this.page.getByText(failMessage)).toBeVisible();
    }

    async verifyLoginSuccess(myAccount_Dashboard: MyAccount_Dashboard){
        await expect(this.page).toHaveURL(publicURL.myAccount); 
        await expect(myAccount_Dashboard.pageContent).toBeVisible();
    }
}