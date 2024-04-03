import {test, expect} from '@playwright/test';
import apiData from '../../data/apiData.json';


test.describe.parallel.only('First API testing on Playwright', () => {
    const baseURl="https://reqres.in/api";
    test("Simple API test - assert api status", async({request})=>{
        const response = await request.get(`${baseURl}/users/2`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text());
        console.log(JSON.parse(await response.text()).data);
        expect(responseBody.data).toEqual(apiData.getUser_id2.data)
    })

    test("Simple API test - assert invalid endpoint", async({request})=>{
        const response = await request.get(`${baseURl}/users/invalid`)
        expect(response.status()).toBe(404)
    })
})