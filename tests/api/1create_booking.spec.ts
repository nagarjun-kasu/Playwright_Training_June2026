import { expect, test } from '@playwright/test'

import { request } from 'node:http'

const BASE_URL = 'https://restful-booker.herokuapp.com';

test("validate create booking", async({request})=>{
    const response = await request.post(`${BASE_URL}/booking`, {
        data:{
            "firstname": "Nagarjun",
            "lastname": "Kasu",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-04-10",
                "checkout": "2026-04-15"
            },
            "additionalneeds": "super bowls"  },
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