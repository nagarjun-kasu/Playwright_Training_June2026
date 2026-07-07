import { expect, test } from '@playwright/test'

import {faker} from '@faker-js/faker';
import {DateTime} from 'luxon';

import createBookingPayload from '../../utils/create_booking_dynamic_payload.json'
import { stringFormat } from '../../utils/common';
import updateBookingPayload from '../../utils/create_booking_payload.json';
import authPayload from '../../utils/auth_token_payload.json';

const BASE_URL = 'https://restful-booker.herokuapp.com';

test("get booking details based on parameters", async({request})=>{
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({min:100, max:1000});

    const checkInDate = DateTime.now().toFormat('yyyy-MM-dd');
    const checkOutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

    const additionalNeeds = faker.string.alpha(10).toLowerCase();

    const dynamicRequestBody = stringFormat(JSON.stringify(createBookingPayload), firstName, lastName, totalPrice, checkInDate, checkOutDate, additionalNeeds);

    const dynamicPayload = JSON.parse(dynamicRequestBody);

    const response = await request.post(`${BASE_URL}/booking`, {
        data:dynamicPayload,
        headers:{
            "Content-Type":"application/json"
        }
    })

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    console.log(responseBody);
     const booking_id = responseBody.bookingid;

    expect(responseBody.booking).toHaveProperty("firstname", firstName);
    expect(responseBody.booking).toHaveProperty("lastname", lastName);
    expect(responseBody.booking.bookingdates).toHaveProperty("checkin", checkInDate);
    expect(responseBody.booking.bookingdates).toHaveProperty("checkout", checkOutDate);
    expect(responseBody.booking).toHaveProperty("additionalneeds", additionalNeeds);

    console.log(" ************* Generate TOKEN **********");
    const tokenResponse = await request.post(`${BASE_URL}/auth`, {
        data:authPayload
    })

    const tokenResponseBody = await tokenResponse.json();
    const access_token = tokenResponseBody.token;

    console.log("******* Delete Booking*************");
    const deleteResponse = await request.delete(`${BASE_URL}/booking/${booking_id}`, {
        headers:{
            "Content-Type":"application/json",
            "Cookie":`token=${access_token}`
        }
    })
    
    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");

    expect(await deleteResponse.text()).toBe("Created");

    //CRUD operations create --> Retrieve -> Update --> Delete



})
