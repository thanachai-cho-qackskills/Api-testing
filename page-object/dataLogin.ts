import {test,expect,request,APIRequestContext} from '@playwright/test'
import { access } from 'fs'

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
            "platform": "AdminPanel",
            "username": "automateapi",
            "password": "Ok@23456"
        } 
        // this.loginAdminResponse = {
        //     "access_token": "",
        //     "refresh_token": "m6sA1WZT5Tf4XT9d4jlG8o5TNt3S4-6BiRjgCJ_iiAqIF",
        //     "platform": "AdminPanel"
        // }
        this.platformisEmpty = {
                "message": [
                    "platform must be one of the following values: AdminPanel, PoS"
                ],
                "error": "Bad Request",
                "statusCode": 400
        }
        this.platformisInvalid = {
            "message": [
                "platform must be one of the following values: AdminPanel, PoS"
            ],
            "error": "Bad Request",
            "statusCode": 400
    }
    this.usernameisEmpty = {
            "message": [
                "username must be longer than or equal to 3 characters",
                "username must contain only letters and numbers"
            ],
            "error": "Bad Request",
            "statusCode": 400

    }
    this.usernameisInvalid = {
        "statusCode": 403,
        "message": "Wrong email or password."
    }
    this.usernameisInvalidlowcase = {
        "message": [
            "username must be a lowercase string"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }

    this.passwordisEmpty = {
        "message": [
            "password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
            "password must be longer than or equal to 8 characters"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.passwordisInvalid = {
        "message": [
            "password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression",
            "password must be longer than or equal to 8 characters"
        ],
        "error": "Bad Request",
        "statusCode": 400
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
        })
    await test.step(`Login success status is ${status}`, async() =>{
        expect(statusResponse,'Expect status').toBe(status)
    })
     await test.step('Login success response', async() =>{
         expect.soft(await callResponse,'can,t show data').toEqual(returns)
    })
    // await test.step('safasfasfasf', async()=>{
    //     process.env.platform = callResponse.platform
    // })
    }
}