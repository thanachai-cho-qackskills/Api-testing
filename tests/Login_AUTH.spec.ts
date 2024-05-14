import { test, expect } from '@playwright/test';

test('Send request for login Adminpanel', async({request}) => {
    const platform = 'AdminPanel';
    const username = 'staffmax120';
    const password = 'Mx@12345678';

    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/auth/login',{

        data: {
            platform: platform,
            username: username,
            password: password
        }
    })

    // expect(response.status()).toBe(200) 
    const accessToken = await response.text();
    expect(response.ok()).toBe(true);
    expect(username).toContain("staffmax120");
    expect(platform).toContain("AdminPanel");
    expect(accessToken).toContain("access_token");
    console.log(await response.json());
}) 
test('Send request for login Pos', async({request}) => {
    const platform = 'Pos';
    const username = 'staffmax120';
    const password = 'Mx@12345678';

    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/auth/login',{

        data: {
            platform: platform,
            username: username,
            password: password
        }
    })

    // expect(response.status()).toBe(200) 
    const accessToken = await response.text();
    expect(response.ok()).toBe(true);
    expect(username).toContain("staffmax120");
    expect(platform).toContain("Pos");
    expect(accessToken).toContain("access_token");
    console.log(await response.json());
}) 
test.only('Send request is not success', async({request}) => {
    const platform = 'Pos';
    const username = 'staffmax10';
    const password = 'Mx@12345678';

    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/auth/login',{

        data: {
            platform: platform,
            username: username,
            password: password
        }
    })

    
    expect(response.status()).toBe(403) 
    const messages = await response.text();
    expect(messages).toContain("Wrong email or password."); 
    const statusCode = await response.text();
    expect(statusCode).toContain("403"); 
    console.log(await response.json());
}) 