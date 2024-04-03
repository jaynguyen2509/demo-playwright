import { expect } from '@playwright/test';
import test from '../../base/BaseTest';
import loginJSON from '../../data/loginJSON.json';
import publicURL from '../../data/url.json';

test.describe('Test for Login function',() => {
    test.beforeEach(async({loginPage})=>{
        console.log('NAVIGATING to Login Page');
        await loginPage.navigateToLogin();
    })


    test('Login fail invalid username', async ({loginPage})=>{
        await loginPage.login(loginJSON.incorrectUsername.username, loginJSON.incorrectUsername.password);
        await loginPage.verifyLoginFail();
    })

    test('Login fail invalid Password', async ({loginPage})=>{
        await loginPage.login(loginJSON.incorrectPassword.username, loginJSON.incorrectPassword.password);
        await loginPage.verifyLoginFail();
    })

    test('Login Success', async ({loginPage,myAccount_Dashboard})=>{
        await loginPage.login(loginJSON.validUser.username, loginJSON.validUser.password);
        await loginPage.verifyLoginSuccess(myAccount_Dashboard);
    })

})