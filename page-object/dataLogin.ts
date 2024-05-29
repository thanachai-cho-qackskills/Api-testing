import {test,expect,request,APIRequestContext} from '@playwright/test'
import { testUser } from '../e2e/fixtures/login';
import { PasswordisEmpty, Passwordisinvalid, PlatformisEmpty,PlatformisInvalid,UsernameisEmpty, UsernameisInvalid, UsernameisLowcase } from '../e2e/fixtures/ResponseLogin';

export class Messages {
    readonly reqContext:APIRequestContext
    readonly PostloginAdmin:any
    readonly loginAdminResponse:any
    readonly platformisEmpty:any
    readonly platformisInvalid:any 
    readonly usernameisEmpty:any
    readonly usernameisInvalid:any
    readonly usernameisInvalidlowcase:any
    readonly passwordisEmpty:any
    readonly passwordisInvalid:any

    constructor (request:APIRequestContext){

        this.reqContext = request;
        this.PostloginAdmin = {
            "platform": testUser.platform,
            "username": testUser.username,
            "password": testUser.password
        } 
    this.platformisEmpty = {
        "message":PlatformisEmpty.message,
        "error":PlatformisEmpty.error,
        "statusCode":PlatformisEmpty.statusCode
    }

    this.platformisInvalid = {
        "message":PlatformisInvalid.message,
        "error" : PlatformisInvalid.error,
        "statusCode":PlatformisInvalid.statusCode
    }
        
    
    this.usernameisEmpty = {
            "message":UsernameisEmpty.message,
            "error": UsernameisEmpty.error,
            "statusCode": UsernameisEmpty.statusCode
    }
    this.usernameisInvalid = {
        "message": UsernameisInvalid.message,
        "statusCode": UsernameisInvalid.statusCode
        
    }
    this.usernameisInvalidlowcase = {
        "message" : UsernameisLowcase.message,
        "error" : UsernameisLowcase.error,
        "statusCode" : UsernameisLowcase.statusCode
    }

    this.passwordisEmpty = {
        "message":PasswordisEmpty.message,
        "error": PasswordisEmpty.error,
        "statusCode": PasswordisEmpty.statusCode
    }
    this.passwordisInvalid = {
        "message":Passwordisinvalid.message,
        "error": Passwordisinvalid.error,
        "statusCode": Passwordisinvalid.statusCode
    }
}
    public async postLogin (body:any,returns:any,status:any){
        let statusResponse: Number
        let callResponse: any

        await test.step('Login Success', async() =>{
            const response = await this.reqContext.post('https://staging-merx-core-sy26b542ta-as.a.run.app/v1/auth/login',{
                'headers' : {
                    'accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                data:body
            });

            statusResponse = response.status()
            callResponse = await response.json()
            console.log('ressponse log',callResponse)
        })
    await test.step(`Login success status is ${status}`, async() =>{
        expect(statusResponse,'Expect status').toBe(status)
    })
     await test.step('Login success response', async() =>{
         expect.soft(await callResponse,'Response call').toEqual(returns)
         console.log('ressponse log',callResponse)
    })
   
    }
}