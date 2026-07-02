import { expect, test } from '@playwright/test'

import createBookingPayload from '../../utils/create_booking_payload.json'

const BASE_URL = 'https://restful-booker.herokuapp.com';

test("create booking with static json payload", async({request})=>{

    const response = await request.post(`${BASE_URL}/booking`, {
        data:createBookingPayload
    })

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.booking).toHaveProperty("firstname", "Nagarjun");
    expect(responseBody.booking).toHaveProperty("lastname", "Kasu");
    expect(responseBody.booking.bookingdates).toHaveProperty("checkin", "2026-04-10");
    expect(responseBody.booking.bookingdates).toHaveProperty("checkout", "2026-04-15");

})