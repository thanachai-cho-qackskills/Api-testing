import {test, expect} from '@playwright/test';

test('Api Post Request Success', async({request}) => {
    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{
        data :{
            "user": {
                "username": "newresta080",
                "password": "Ok@23456"
        },
            "owner": {
                "given_name": "Test",
                "family_name": "Resta01",
                "email_address": "resta080@newrestaf.com",
                "phone_number": "0989087685"
        },
            "business_name": "Test Newresta01",
            "country": "TH",
            "language_code": "th",
            "currency": "THB",
            "status": "ACTIVE",
            "main_location_id" : "XXxx", //not required
            "merchantLocation": {
                "name": "ก.ท.ม.",
                    "address":{
                        "address_line": ["555/555"],
                        "locality": "ทุ่งสองห้อง",
                        "sub_locality": ["หลักสี่"],
                        "administrative_district_level_1": ["กรุงเทพมหานคร"],
                        "postal_code": "10210",
                        "country":"TH"
            },
            "timezone": "UTC",
            "capabilities": [
                "CREDIT_CARD_PROCESSING"
            ],
            "status":"ACTIVE",
            "language_code":"th-TH",
            "currency":"THB",
            "business_name":"Raphaels Puppy-Care Emporium",
            "type":"MOBILE",
            "business_hours":{
                "periods": [
            
                ]
            },
            "description":"Mobile dog treats and toys in Oakland",
            "twitter_username":"raphaelspupemporium",
            "instagram_username":"raphaelspupemporium",
            "facebook_url":"facebook.com/raphaelspupemporium",
            "merchant_category_code":"7299",
            "payment": {
                "discount": {
                    "calculate_type": "DISCOUNT_BEFORE_TAX",
                    "max_percent": "100.00"
                },
                "rounding":{
                    "rounding_type":"ROUND_UP",
                    "amount": "1"
                },
                "service_charge": {
                    "except_delivery": true,
                    "except_takeaway": true,
                    "percentage": "1"
                },
                "tax": {
                    "tax_calculate_type": "EXCLUSIVE",
                    "percentage": "7",
                    "tax_type": "VAT"
                }   
            }
        }
    }
    })

    expect(response.status()).toBe(201) 

    const username = await response.text();
    expect(username).toContain("newresta080");
    expect(username).toContain("resta080@newrestaf.com")
    
    console.log(await response.json());

}) 
test('Post Request Username already exists', async({request}) => {
    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{
        data :{
            "user": {
                "username": "newresta080",
                "password": "Ok@23456"
        },
            "owner": {
                "given_name": "Test",
                "family_name": "Resta01",
                "email_address": "resta081@newrestaf.com",
                "phone_number": "0989087685"
        },
            "business_name": "Test Newresta01",
            "country": "TH",
            "language_code": "th",
            "currency": "THB",
            "status": "ACTIVE",
            "main_location_id" : "XXxx", //not required
            "merchantLocation": {
                "name": "ก.ท.ม.",
                    "address":{
                        "address_line": ["555/555"],
                        "locality": "ทุ่งสองห้อง",
                        "sub_locality": ["หลักสี่"],
                        "administrative_district_level_1": ["กรุงเทพมหานคร"],
                        "postal_code": "10210",
                        "country":"TH"
            },
            "timezone": "UTC",
            "capabilities": [
                "CREDIT_CARD_PROCESSING"
            ],
            "status":"ACTIVE",
            "language_code":"th-TH",
            "currency":"THB",
            "business_name":"Raphaels Puppy-Care Emporium",
            "type":"MOBILE",
            "business_hours":{
                "periods": [
            
                ]
            },
            "description":"Mobile dog treats and toys in Oakland",
            "twitter_username":"raphaelspupemporium",
            "instagram_username":"raphaelspupemporium",
            "facebook_url":"facebook.com/raphaelspupemporium",
            "merchant_category_code":"7299",
            "payment": {
                "discount": {
                    "calculate_type": "DISCOUNT_BEFORE_TAX",
                    "max_percent": "100.00"
                },
                "rounding":{
                    "rounding_type":"ROUND_UP",
                    "amount": "1"
                },
                "service_charge": {
                    "except_delivery": true,
                    "except_takeaway": true,
                    "percentage": "1"
                },
                "tax": {
                    "tax_calculate_type": "EXCLUSIVE",
                    "percentage": "7",
                    "tax_type": "VAT"
                }   
            }
        }
    }
    })

    expect(response.status()).toBe(409) 

    const messages = await response.text();
    expect(messages).toContain("Username already exists"); 
    console.log(await response.json());

}) 

test('Api Post Request Email exists', async({request}) => {
    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{
        data :{
            "user": {
                "username": "newresta081",
                "password": "Ok@23456"
        },
            "owner": {
                "given_name": "Test",
                "family_name": "Resta01",
                "email_address": "resta082@newrestaf.com",
                "phone_number": "0989087685"
        },
            "business_name": "Test Newresta01",
            "country": "TH",
            "language_code": "th",
            "currency": "THB",
            "status": "ACTIVE",
            "main_location_id" : "XXxx", //not required
            "merchantLocation": {
                "name": "ก.ท.ม.",
                    "address":{
                        "address_line": ["555/555"],
                        "locality": "ทุ่งสองห้อง",
                        "sub_locality": ["หลักสี่"],
                        "administrative_district_level_1": ["กรุงเทพมหานคร"],
                        "postal_code": "10210",
                        "country":"TH"
            },
            "timezone": "UTC",
            "capabilities": [
                "CREDIT_CARD_PROCESSING"
            ],
            "status":"ACTIVE",
            "language_code":"th-TH",
            "currency":"THB",
            "business_name":"Raphaels Puppy-Care Emporium",
            "type":"MOBILE",
            "business_hours":{
                "periods": [
            
                ]
            },
            "description":"Mobile dog treats and toys in Oakland",
            "twitter_username":"raphaelspupemporium",
            "instagram_username":"raphaelspupemporium",
            "facebook_url":"facebook.com/raphaelspupemporium",
            "merchant_category_code":"7299",
            "payment": {
                "discount": {
                    "calculate_type": "DISCOUNT_BEFORE_TAX",
                    "max_percent": "100.00"
                },
                "rounding":{
                    "rounding_type":"ROUND_UP",
                    "amount": "1"
                },
                "service_charge": {
                    "except_delivery": true,
                    "except_takeaway": true,
                    "percentage": "1"
                },
                "tax": {
                    "tax_calculate_type": "EXCLUSIVE",
                    "percentage": "7",
                    "tax_type": "VAT"
                }   
            }
        }
    }
    })

    expect(response.status()).toBe(409) 

    const messages = await response.text();
    expect(messages).toContain("Email already exists"); 
    console.log(await response.json());

}) 
test.only('Api Post Request Password incorrect format', async({request}) => {
    const response = await request.post('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/merchants',{
        data :{
            "user": {
                "username": "newresta081",
                "password": "Ok23456"
        },
            "owner": {
                "given_name": "Test",
                "family_name": "Resta01",
                "email_address": "resta082@newrestaf.com",
                "phone_number": "0989087685"
        },
            "business_name": "Test Newresta01",
            "country": "TH",
            "language_code": "th",
            "currency": "THB",
            "status": "ACTIVE",
            "main_location_id" : "XXxx", //not required
            "merchantLocation": {
                "name": "ก.ท.ม.",
                    "address":{
                        "address_line": ["555/555"],
                        "locality": "ทุ่งสองห้อง",
                        "sub_locality": ["หลักสี่"],
                        "administrative_district_level_1": ["กรุงเทพมหานคร"],
                        "postal_code": "10210",
                        "country":"TH"
            },
            "timezone": "UTC",
            "capabilities": [
                "CREDIT_CARD_PROCESSING"
            ],
            "status":"ACTIVE",
            "language_code":"th-TH",
            "currency":"THB",
            "business_name":"Raphaels Puppy-Care Emporium",
            "type":"MOBILE",
            "business_hours":{
                "periods": [
            
                ]
            },
            "description":"Mobile dog treats and toys in Oakland",
            "twitter_username":"raphaelspupemporium",
            "instagram_username":"raphaelspupemporium",
            "facebook_url":"facebook.com/raphaelspupemporium",
            "merchant_category_code":"7299",
            "payment": {
                "discount": {
                    "calculate_type": "DISCOUNT_BEFORE_TAX",
                    "max_percent": "100.00"
                },
                "rounding":{
                    "rounding_type":"ROUND_UP",
                    "amount": "1"
                },
                "service_charge": {
                    "except_delivery": true,
                    "except_takeaway": true,
                    "percentage": "1"
                },
                "tax": {
                    "tax_calculate_type": "EXCLUSIVE",
                    "percentage": "7",
                    "tax_type": "VAT"
                }   
            }
        }
    }
    })

    expect(response.status()).toBe(400) 

    const messages = await response.text();
    expect(messages).toContain("user.password must match"); 
    expect(messages).toContain("user.password must be longer than or equal to 8 characters");
    console.log(await response.json());

}) 



// test('Api Get Request', async({request}) => {
//     const response = await request.get('https://dev-merx-core-sy26b542ta-as.a.run.app/v1/merchants/merchant/?merchant_id=65f164b59c92d328422f00b4')
//     expect(response.status()).toBe(200) 

//     const messages = await response.text();
//     expect(messages).toContain("newmerchant@qaen87.com");

//     console.log(await response.json());

// }) 