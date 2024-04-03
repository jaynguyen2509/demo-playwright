import { TestInfo, test as _baseTest } from "@playwright/test";
import RegisterPage from "../pageFactory/register.page";
import LoginPage from "../pageFactory/login.page";
import MyAccount_Dashboard from "../pageFactory/myAccount_Dashboard.page";

const test = _baseTest.extend <{
    loginPage: LoginPage
    registerPage: RegisterPage
    test: TestInfo
    myAccount_Dashboard: MyAccount_Dashboard

}>({
    registerPage: async ({page,context},use)=>{
        await use(new RegisterPage(page,context));
    },
    loginPage: async({page,context},use)=>{
        await use(new LoginPage(page,context))
    },
    myAccount_Dashboard: async({page,context},use)=>{
        await use(new MyAccount_Dashboard(page,context))
    }   
})

export default test;