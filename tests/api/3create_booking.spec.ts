import { expect, test } from '@playwright/test'

import {faker} from '@faker-js/faker';
import {DateTime} from 'luxon';

import createBookingPayload from '../../utils/create_booking_dynamic_payload.json'
import { stringFormat } from '../../utils/common';

const BASE_URL = 'https://restful-booker.herokuapp.com';

test("create booking with dynamic payload", async({request})=>{
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int({min:100, max:1000});

    const checkInDate = DateTime.now().toFormat('yyyy-MM-dd');
    const checkOutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

    const additionalNeeds = faker.string.alpha(10).toLowerCase();

    const dynamicRequestBody = stringFormat(JSON.stringify(createBookingPayload), firstName, lastName, totalPrice, checkInDate, checkOutDate, additionalNeeds);

    const dynamicPayload = JSON.parse(dynamicRequestBody);

    const response = await request.post(`${BASE_URL}/booking`, {
        data:dynamicPayload
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




})
