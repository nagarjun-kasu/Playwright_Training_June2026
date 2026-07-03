import { expect, test } from '@playwright/test'

import {faker} from '@faker-js/faker';
import {DateTime} from 'luxon';

import createBookingPayload from '../../utils/create_booking_dynamic_payload.json'
import { stringFormat } from '../../utils/common';

const BASE_URL = 'https://restful-booker.herokuapp.com';

test("get booking details based on booking id", async({request})=>{
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

    expect(responseBody.booking).toHaveProperty("firstname", firstName);
    expect(responseBody.booking).toHaveProperty("lastname", lastName);
    expect(responseBody.booking.bookingdates).toHaveProperty("checkin", checkInDate);
    expect(responseBody.booking.bookingdates).toHaveProperty("checkout", checkOutDate);
    expect(responseBody.booking).toHaveProperty("additionalneeds", additionalNeeds);

    //schema validation
    console.log(typeof "nagarjun");

    expect(typeof responseBody.bookingid).toBe("number");
    expect(typeof responseBody.booking.firstname).toBe("string");

    expect(responseBody.booking).toMatchObject({
        firstname:expect.any(String),
        lastname:expect.any(String),
        totalprice:expect.any(Number),
        depositpaid:expect.any(Boolean),
        bookingdates:{
            checkin:expect.any(String),
            checkout:expect.any(String),
        },
        additionalneeds:expect.any(String)

    });

    const booking_id = responseBody.bookingid;

    const getResponse = await request.get(`${BASE_URL}/booking/${booking_id}`);

    expect(getResponse.status()).toBe(200);
    expect(getResponse.ok()).toBeTruthy();

    const getBookingDetails = await getResponse.json();
    expect(getBookingDetails).toHaveProperty("firstname", firstName);
    expect(getBookingDetails).toHaveProperty("lastname", lastName);
    expect(getBookingDetails).toHaveProperty("totalprice", totalPrice);
    expect(getBookingDetails.bookingdates).toHaveProperty("checkin", dynamicPayload.bookingdates.checkin);
    expect(getBookingDetails.bookingdates).toHaveProperty("checkout", dynamicPayload.bookingdates.checkout);
    expect(getBookingDetails).toHaveProperty("additionalneeds", dynamicPayload.additionalneeds);

})
