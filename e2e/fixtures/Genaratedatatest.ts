import { faker } from '@faker-js/faker';

export const dataTestUser = () =>{
    return {
      "username": faker.internet.userName().toLowerCase(),
      "password": faker.internet.password()
    };
}
export const dataTestOwner = () => {
    return {
        "given_name" : faker.person.firstName(),
        "family_name" : faker.person.firstName(),
        "email_address" : faker.internet.email(),
        "phone_number": faker.phone.number().replace(/\D/g, '').slice(0, 10)
        };
}
