import {test,expect,request,APIRequestContext} from '@playwright/test'
import { Createmerchant } from '../e2e/fixtures/createmerchant'
import { PasswordisEmpty, UsernameisEmpty } from '../e2e/fixtures/ResponseLogin'
import { EmailisEmpty, PassowrdisnotComplete, PasswordisInvalid, UsernameisAlready } from '../e2e/fixtures/ResponseCreateMerchants'



export class Merchantdata {
    readonly reqContext:APIRequestContext
    readonly PostCrudmerchant:any
    readonly PostCrudResponse:any
    readonly usernameisEmpty:any
    readonly usernameisAlready:any
    readonly passwordisEmpty:any
    readonly passwordisInvalid:any
    readonly passwordisnotcomplete:any
    readonly emailisAlready:any 
    readonly emailisEmpty:any
    // Owerner_field
    readonly givenNameisEmpty:any
    readonly familyNameisEmpty:any
    readonly phoneNumberisEmpty:any
    readonly businessNameisEmpty:any
    readonly countryisEmpty:any
    readonly languagecodeisEmpty:any
    readonly currencyisEmpty:any
    // MerchantLocation    
    readonly nameisEmpty:any
    readonly addressisEmpty:any
    readonly addresslineisempty:any
    readonly localityisEmpty:any
    readonly sublocalityisEmpty:any
    readonly admindistrictisEmpty:any
    readonly postolcodeisEmpty:any
    readonly addresscountryisEmpty:any
    readonly timezoneisEmpty:any
    readonly capabilitiesisEmpty:any
    readonly capabilitiesisArray:any
    readonly statusisEmpty:any
    readonly locationlanguageisEmpty:any
    readonly lcoationcurrencyisEmpty:any
    readonly typeisEmpty:any
    readonly businesshoursisEmpty:any
    readonly periodsisEmpty:any
    readonly descriptionisEmpty:any
    readonly twitterusernameisEmpty:any
    readonly instagramusernameisEmpty:any
    readonly facebookurlisEmpty:any
    readonly mccisEmpty:any
    readonly paymentisEmpty:any
    readonly paymentTypeisEmpty:any
    readonly discountisEmpty:any
    readonly calculateTypeisEmpty:any
    readonly maxPercentisEmpty:any
    readonly roundingisEmpty:any
    readonly roundingTypeisEmpty:any
    readonly amountisEmpty:any
    readonly servicechargeisEmpty:any
    readonly exceptDeliveryisEmpty:any
    readonly exceptTakeawayisEmpty:any
    readonly percentageisEpmty:any
    readonly taxisEmpty:any
    readonly taxCalculateTypeisEmpty:any
    readonly taxPercentageisEmpty:any
    readonly taxTypeisEmpty:any


    constructor (request:APIRequestContext){
        
        this.reqContext = request;
        this.PostCrudmerchant = Createmerchant
    this.PostCrudResponse = Createmerchant
    
    this.usernameisEmpty = {
        "message":UsernameisEmpty.message,
        "error": UsernameisEmpty.error,
        "statusCode": UsernameisEmpty
      }
    this.usernameisAlready = {
            "message": UsernameisAlready.message,
            "error": UsernameisAlready.error,
            "statusCode": UsernameisAlready.statusCode
        }
    this.passwordisEmpty = {
        "message": PasswordisEmpty.message,
        "error": PasswordisEmpty.error,
        "statusCode": PasswordisEmpty.statusCode
    }
    this.passwordisInvalid = {
        "message": PasswordisInvalid.message,
        "error": PasswordisInvalid.error,
        "statusCode": PasswordisInvalid.statusCode
    }
    this.passwordisnotcomplete = {
        "message": PassowrdisnotComplete.message,
        "error": PassowrdisnotComplete.error,
        "statusCode": PassowrdisnotComplete.statusCode
    }
    this.emailisEmpty = {
        "message": EmailisEmpty.message,
        "error": EmailisEmpty.error,
        "statusCode": EmailisEmpty.statusCode
    }
    this.emailisAlready = {
        "message": "Email already exists",
        "error": "Conflict",
        "statusCode": 409
    }
    this.givenNameisEmpty = {
        "message": [ 'owner.given_name should not be empty' ],
        "error": 'Bad Request',
        "statusCode": 400
      }
    this.familyNameisEmpty = {
        "message": [
            "owner.family_name should not be empty"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.phoneNumberisEmpty = {
        "message": [
            "owner.phone_number must be longer than or equal to 9 characters",
            "owner.phone_number must be a number string"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.businessNameisEmpty = {
        "statusCode": 500,
        "message": "Internal server error"
    }
    this.countryisEmpty = {
        "message": [
            "country must be one of the following values: TH, JP"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.languagecodeisEmpty = {
        "message": [
            "language_code must be one of the following values: th, en"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.currencyisEmpty = {
        "message": [
            "currency must be one of the following values: THB"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.nameisEmpty = {
        "message": [
            "merchantLocation.name should not be empty"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.addressisEmpty = {
        "message": [
            "merchantLocation.address.address_line must contain at least 1 elements",
            "merchantLocation.address.address_line must be an array",
            "merchantLocation.address.each value in address_line must be a string",
            "merchantLocation.address.locality should not be empty",
            "merchantLocation.address.locality must be a string",
            "merchantLocation.address.sub_locality must contain at least 1 elements",
            "merchantLocation.address.sub_locality must be an array",
            "merchantLocation.address.each value in sub_locality must be a string",
            "merchantLocation.address.administrative_district_level_1 must be an array",
            "merchantLocation.address.each value in administrative_district_level_1 must be a string",
            "merchantLocation.address.postal_code should not be empty",
            "merchantLocation.address.postal_code must be a string",
            "merchantLocation.address.country must be one of the following values: TH, JP"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.addresslineisempty = {
        "message": [
            "merchantLocation.address.address_line must contain at least 1 elements"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.localityisEmpty = {
        "message": [
            "merchantLocation.address.locality should not be empty"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.sublocalityisEmpty = {
        "message": [
            "merchantLocation.address.sub_locality must contain at least 1 elements"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.admindistrictisEmpty= {
        "message": [
            "merchantLocation.address.administrative_district_level_1 must be an array"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    
    this.postolcodeisEmpty = {
        "message": [ 'merchantLocation.address.postal_code should not be empty' ],
        "error": 'Bad Request',
        "statusCode": 400
      
    }
    this.addresscountryisEmpty = {
        "message": [
            "merchantLocation.address.country must be one of the following values: TH, JP"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.timezoneisEmpty = {
        "message": [
            "merchantLocation.timezone should not be empty"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.capabilitiesisEmpty = {
    "message": [
        "merchantLocation.capabilities must be an array"
    ],
    "error": "Bad Request",
    "statusCode": 400
    }
    
    this.lcoationcurrencyisEmpty = {
        "message": "Username already exists",
        "error": "Conflict",
        "statusCode": 409
    }
    this.typeisEmpty = {
        "message": [
            "merchantLocation.type must be one of the following values: MOBILE, PHYSICAL"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.businesshoursisEmpty = {
        "message": [
            "merchantLocation.business_hours.periods must be an array"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }
    this.periodsisEmpty = {
        "message": [
            "merchantLocation.business_hours.periods must be an array",
            "merchantLocation.business_hours.each value in nested property periods must be either object or array"
        ],
        "error": "Bad Request",
        "statusCode": 400
    }

}
    public async postCreateMer (body:any,returns:any,status:any){
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
            console.log('ressponse log',callResponse)
        })
    await test.step(`Create success status is ${status}`, async() =>{
        expect(statusResponse,'Expect status').toBe(status)
    })
     await test.step('Create success response', async() =>{
         expect.soft(await callResponse,'Response call').toEqual(returns)
         
    })
}
      public async postresponsefield (body:any,status:any,responseChecker: (response: any) => void){
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
            console.log('ressponse log',callResponse)
        })
    await test.step(`Create success status is ${status}`, async() =>{
        expect(statusResponse,'Expect status').toBe(status)
    })
    await test.step('Verify response content', async () => {
        responseChecker(callResponse);
      });
    }
    public checkResponseFields(response: any, fields: string[]) {
        fields.forEach(field => {
          expect(response).toHaveProperty(field);
        });
      }
    
      
      public checkAdditionalFields(response: any, additionalFields: string[]) {
        additionalFields.forEach(field => {
          expect(response).toHaveProperty(field);
        });
      }
      public checkResponse(response: any, expectedValues: any) {
        expect.soft(response.data.merchant.business_name).toBe(expectedValues.business_name);
        expect.soft(response.data.merchant.country).toBe(expectedValues.country);
        expect.soft(response.data.merchant.language_code).toBe(expectedValues.language_code);
        expect.soft(response.data.merchant.currency).toBe(expectedValues.currency);
        // เพิ่มการตรวจสอบอื่น ๆ ที่จำเป็น โดยใช้ expect.soft
      }
   
}