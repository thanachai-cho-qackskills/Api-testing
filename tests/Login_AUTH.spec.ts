import { test, expect, request,_baseTest } from '@playwright/test';
import { Messages } from '../page-object/dataLogin';
import { testUser } from '../e2e/fixtures/login';

test.describe('Login function' ,() => {

    test.beforeAll('Login function', async()=> {

    })

    test('Login success', async({request}) =>{
        const response = await request.post('https://staging-merx-core-sy26b542ta-as.a.run.app/v1/auth/login',{
            data:{
                "platform": testUser.platform,
                "username": testUser.username,
                "password": testUser.password
            }
        })
        expect(response.status()).toBe(200) 

        const message = await response.text();
        expect(message).toContain("access_token"); 
        console.log(await response.json());
        
        })
    test('platform is empty', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.platform = ''
    await messages.postLogin(messages.PostloginAdmin,messages.platformisEmpty,400)
    })

    test('platform is invalid', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.platform = 'admin'
    await messages.postLogin(messages.PostloginAdmin,messages.platformisEmpty,400)

    })
    test('username is empty', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.username = ''
    await messages.postLogin(messages.PostloginAdmin,messages.usernameisEmpty,400)

    })
    test('username is invalid locase string', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.username = 'Automateapi'
    await messages.postLogin(messages.PostloginAdmin,messages.usernameisInvalidlowcase,400)
    })

    test('username is invalid', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.username = 'autoasfasfa'
    await messages.postLogin(messages.PostloginAdmin,messages.usernameisInvalid,403)
    })
    
    test('password is empty', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.password = ''
    await messages.postLogin(messages.PostloginAdmin,messages.passwordisEmpty,400)
    })
    test('password is invalid', async({request}) =>{
        const messages = new Messages(request);

        messages.PostloginAdmin.password = 'ok@234'
    await messages.postLogin(messages.PostloginAdmin,messages.passwordisEmpty,400)
    })
    
})