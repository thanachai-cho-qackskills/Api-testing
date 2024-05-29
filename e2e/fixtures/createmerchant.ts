import { faker } from "@faker-js/faker"

export const Createmerchant = {
  "user": {
    "username": faker.string.alpha({ length: 6, casing: 'lower' }),
    "password": "Ok@12345"
  },
  "owner": {
    "given_name": "automate apl",
    "family_name": "api automatel",
    "email_address": faker.internet.email(),
    "phone_number": "0812345690"
  },
    "business_name": "automate for apl",
    "country": "TH",
    "language_code": "th",
    "currency": "THB",
    "merchantLocation": {
        "name": "automate for apl",
        "address":{
            "address_line": ["55/66"],
            "locality": "รามอินทรา",
      "sub_locality": ["รามอินทรา"],
            "administrative_district_level_1": ["CA"],
            "postal_code": "10900",
      "country": "TH"
    },
        "timezone": "UTC",
        "capabilities": [
      "CREDIT_CARD_PROCESSING"
    ],
    "status":"ACTIVE",
    "language_code":"th-TH",
    "currency":"THB",
    "business_name":"ชูบาชาบู",
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
    "description":"ชาบูชูบา",
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