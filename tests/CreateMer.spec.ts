import { test, expect, request,_baseTest } from '@playwright/test';
import { Createmerchant } from '../e2e/fixtures/createmerchant';
import { Merchantdata } from '../page-object/dataCreateMer';
import { faker } from '@faker-js/faker';


test.describe('Create Merchant function' ,() => {

    test.beforeAll('Login function', async()=> {
        
    })

    test('Create Merchant success', async({request}) =>{
        const response = await request.post('https://staging-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{ 
    data: Createmerchant
        })

        console.log(await response.json());
        expect(response.status()).toBe(201) 

        const message = await response.text();
        expect(message).toContain('location_id'); 
        
        
         })

         test('Username is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.user.username = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.usernameisEmpty,400)
        })
        test('Username is already', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.user.username = 'apitesting'
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.usernameisAlready,409)
        })
        test('Password is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.user.password = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.passwordisEmpty,400)
        })
        test('Password is invalid', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.user.password = 'ok@12345'
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.passwordisInvalid,400)
        })
        test('Password is not complete', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.user.password = 'ok@1234'
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.passwordisnotcomplete,400)
        })
        test('Email is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
    
            merchant.PostCrudmerchant.owner.email_address = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.emailisEmpty,400)
        })
        test('Email is already', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' });
            merchant.PostCrudmerchant.owner.email_address = 'apitesting@gmail.com'
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.emailisAlready,409)
        })
        test('Given name is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' });
            merchant.PostCrudmerchant.owner.given_name = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.givenNameisEmpty,400)
        })
        test('Family name is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' });
            merchant.PostCrudmerchant.owner.family_name = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.familyNameisEmpty,400)
        })
        test('Phone number is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' });
            merchant.PostCrudmerchant.owner.phone_number = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.phoneNumberisEmpty,400)
        })
        test('Business name is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.business_name = ''
        await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.businessNameisEmpty,500)
        })
        test('Country is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.country = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.countryisEmpty,400)
        })
        test('language_code is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.language_code = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.languagecodeisEmpty,400)
        })
        test('Currency is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.currency = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.currencyisEmpty,400)
        })
        test('Name is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.name = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.nameisEmpty,400)
        })
        test('Address is empty', async({request}) =>{
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.address = {}
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.addressisEmpty,400)
        })
        test('Address line is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.address.address_line = []
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.addresslineisempty,400)
        })
        test('Localcity is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.address.locality = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.localityisEmpty,400)
        })
        test('Sub_localcity is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.address.sub_locality = []
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.sublocalityisEmpty,400)
        })
        test('District level is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email(),
            merchant.PostCrudmerchant.merchantLocation.address.administrative_district_level_1 = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.admindistrictisEmpty,400)
        })
        test('District level is array', async({request}) => {
            const merchant = new Merchantdata(request);
            const body = Createmerchant
            const expectedStatus = 201
              
              const additionalFields = [
                'data.device.id',
                'data.device',
                'data.deviceCode.id',
                'data.user.username',
                'data.user.email',
                
              ];
              
              await merchant.postresponsefield(body, expectedStatus, (response) => {
               
                merchant.checkAdditionalFields(response, additionalFields);
               
              });
            })
        test('Postol_code is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
            merchant.PostCrudmerchant.merchantLocation.address.postal_code = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.postolcodeisEmpty,400)
        })
        test('Address country is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
            merchant.PostCrudmerchant.merchantLocation.address.country = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.addresscountryisEmpty,400)
        })
        test('Timezone is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
            merchant.PostCrudmerchant.merchantLocation.timezone = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.timezoneisEmpty,400)
        })
        test('Capabilities is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            
            merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
            merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
            merchant.PostCrudmerchant.merchantLocation.capabilities = ''
            await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.capabilitiesisEmpty,400)
        })
        test('Capabilities is array', async({request}) => {
            const merchant = new Merchantdata(request);
            const body = Createmerchant
            merchant.PostCrudmerchant.merchantLocation.capabilities = []
            const expectedStatus = 201
              
              const additionalFields = [
                'data.device.id',
                'data.device',
                'data.deviceCode.id',
                'data.user.username',
                'data.user.email',
                
              ];
              
              await merchant.postresponsefield(body, expectedStatus, (response) => {
               
                merchant.checkAdditionalFields(response, additionalFields);
               
              });
        })
     test('status is empty', async({request}) => {
        const merchant = new Merchantdata(request);
        const body = Createmerchant
        merchant.PostCrudmerchant.merchantLocation.status = ''
        const expectedStatus = 201
          
          const additionalFields = [
            'data.device.id',
            'data.device',
            'data.deviceCode.id',
            'data.user.username',
            'data.user.email',
            
          ];
          
          await merchant.postresponsefield(body, expectedStatus, (response) => {
           
            merchant.checkAdditionalFields(response, additionalFields);
           
          });
        })
        test('Langauge code is empty', async({request}) => {
            const merchant = new Merchantdata(request);
            const body = Createmerchant
            const expectedStatus = 201
              
              const additionalFields = [
                'data.device.id',
                'data.device',
                'data.deviceCode.id',
                'data.user.username',
                'data.user.email',
                
              ];
              
              await merchant.postresponsefield(body, expectedStatus, (response) => {
               
                merchant.checkAdditionalFields(response, additionalFields);
               
              });
            })
            test('Type is empty', async({request}) => {
                const merchant = new Merchantdata(request);
                
                merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
                merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
                merchant.PostCrudmerchant.merchantLocation.type = ''
                await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.typeisEmpty,400)
            })
            test('Business hours is empty', async({request}) => {
                const merchant = new Merchantdata(request);
                
                merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
                merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
                merchant.PostCrudmerchant.merchantLocation.business_hours = {}
                await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.businesshoursisEmpty,400)
            })
            test('Peliods is array', async({request}) => {
                const merchant = new Merchantdata(request);
                const body = Createmerchant
                const expectedStatus = 201
                  
                  const additionalFields = [
                    'data.device.id',
                    'data.device',
                    'data.deviceCode.id',
                    'data.user.username',
                    'data.user.email',
                    
                  ];
                  
                  await merchant.postresponsefield(body, expectedStatus, (response) => {
                   
                    merchant.checkAdditionalFields(response, additionalFields);
                   
                  });
                })
                test('Peliods is empty', async({request}) => {
                    const merchant = new Merchantdata(request);
                    
                    merchant.PostCrudmerchant.user.username = faker.string.alpha({ length: 6, casing: 'lower' })
                    merchant.PostCrudmerchant.owner.email_address = faker.internet.email()
                    merchant.PostCrudmerchant.merchantLocation.business_hours.periods = ''
                    await merchant.postCreateMer(merchant.PostCrudmerchant,merchant.periodsisEmpty,400)
                })
                test('Description is empty', async({request}) => {
                    const merchant = new Merchantdata(request);
                    const body = Createmerchant
                    const expectedStatus = 201
                      
                      const additionalFields = [
                        'data.device.id',
                        'data.device',
                        'data.deviceCode.id',
                        'data.user.username',
                        'data.user.email',
                        
                      ];
                      
                      await merchant.postresponsefield(body, expectedStatus, (response) => {
                       
                        merchant.checkAdditionalFields(response, additionalFields);
                       
                      });
                    })
})  
