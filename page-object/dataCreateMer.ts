import {test,expect,request,APIRequestContext} from '@playwright/test'


export class Messages {
    readonly reqContext:APIRequestContext
    readonly PostCrudmerchant:any
    readonly PostCrudResponse:any
    readonly usernameisEmpty:any
    readonly usernameisAlready:any
    readonly passwordisEmpty:any
    readonly passwordisInvalid:any
    readonly emailisAlready:any 
    readonly emailisEmpty:any

    constructor (request:APIRequestContext){

        this.reqContext = request;
        this.PostCrudmerchant = {
            "user": {
              "username": "automateapi",
              "password": "Ok@23456"
            },
            "owner": {
              "given_name": "automate",
              "family_name": "api",
              "email_address": "automateapi@gmail.com",
              "phone_number": "0812345678"
            },
              "business_name": "automate for api",
              "country": "TH",
              "language_code": "th",
              "currency": "THB",
              "merchantLocation": {
                  "name": "automate for api",
                  "address":{
                      "address_line": ["5/66"],
                      "locality": "พญาไท",
                "sub_locality": ["พญาไท"],
                      "administrative_district_level_1": ["CA"],
                      "postal_code": "10400",
                "country": "TH"
              },
                  "timezone": "UTC",
                  "capabilities": [
                "CREDIT_CARD_PROCESSING"
              ],
              "status":"ACTIVE",
              "language_code":"th-TH",
              "currency":"THB",
              "business_name":"ชูบา ชาบู",
              "type":"MOBILE",
              "business_hours":{
                   "periods": [
                    {
                      "day_of_week": "MON",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "TUE",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "WED",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "THU",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "FRI",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "SAT",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    },
                    {
                      "day_of_week": "SUN",
                      "start_local_time": "10:00:00",
                      "end_local_time": "22:00:00"
                    } 
                  ]
              },
              "description":"ชาบู",
              "twitter_username":"raphaelspupemporium",
              "instagram_username":"raphaelspupemporium",
              "facebook_url":"facebook.com/raphaelspupemporium",
              "mcc":"7299",
              "payment": {
                  "type": "POSTPAID",
                  "discount": {
                    "calculate_type": "DISCOUNT_BEFORE_TAX",
                    "max_percent": "20.00"
                  },
                  "rounding":{
                    "rounding_type":"ROUND_UP",
                    "amount": "1"
                  },
                  "service_charge": {
                     "except_delivery": true,
                     "except_takeaway": true,
                     "percentage": "10"
                  },
                  "tax": {
                    "tax_calculate_type": "EXCLUSIVE",
                    "percentage": "7",
                    "tax_type": "VAT"
                  }
              }
            }
          }
    this.PostCrudResponse = {
        "data": {
            "merchant": {
                "id": "6642f36677b8dbc57c6783b7",
                "business_name": "automate for api",
                "country": "TH",
                "created_at": "2024-05-14T05:15:18.480Z",
                "currency": "THB",
                "language_code": "th",
                "main_location_id": "6642f36677b8dbc57c6783b9",
                "owner_email": "automateapi@gmail.com",
                "status": "ACTIVE",
                "brand_color": "#505050",
                "palette": {
                    "primary": {
                        "main": "#505050",
                        "light": "#565656"
                    }
                },
                "logo_image_url": null,
                "cover_image_url": null,
                "advertising_image_urls": []
            },
            "device": {
                "id": "6642f36677b8dbc57c6783c5",
                "attribute": {
                    "manufacturer": "default",
                    "manufacturers_id": "default",
                    "merchant_id": "6642f36677b8dbc57c6783b7",
                    "model": "default",
                    "name": "default",
                    "serial_number": null,
                    "type": "default"
                },
                "status_category": "AVAILABLE"
            },
            "deviceCode": {
                "id": "6642f36677b8dbc57c6783c8",
                "name": "default",
                "code": "414365034556",
                "device_id": "6642f36677b8dbc57c6783c5",
                "product_type": "TERMINAL_API",
                "location_id": "6642f36677b8dbc57c6783b9",
                "status": "UNPAIRED",
                "expired_at": "2024-05-16T05:15:18.510Z"
            },
            "user": {
                "username": "automateapi",
                "email": "automateapi@gmail.com"
            }
        }
    }
    this.usernameisEmpty = {
        "message": [
            "user.username must be longer than or equal to 3 characters",
            "user.username must contain only letters and numbers"
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
    this.usernameisAlready = {
            "message": "Username already exists",
            "error": "Conflict",
            "statusCode": 409
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
            "user.password must match /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&\\*\\?])[A-Za-z\\d!@#$%^&\\*\\?].*$/ regular expression"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.emailisEmpty = {
        "message": [
            "owner.email_address must be an email"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.emailisAlready = {
        "message": "Email already exists",
        "error": "Conflict",
        "statusCode": 409
    }
}
    public async postLogin (body:any,returns:any,status:any){
        let statusResponse: Number
        let callResponse: any

        await test.step('Craete Success', async() =>{
            const response = await this.reqContext.post('https://staging-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{
                'headers' : {
                    'accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                data:body
            });

            statusResponse = response.status()
            callResponse = await response.json()
        })
    await test.step(`Create success status is ${status}`, async() =>{
        expect(statusResponse,'Expect status').toBe(status)
    })
     await test.step('Create response', async() =>{
         expect.soft(await callResponse,'Call response returns').toEqual(returns)
    })
    // await test.step('safasfasfasf', async()=>{
    //     process.env.platform = callResponse.platform
    // })
    }
}