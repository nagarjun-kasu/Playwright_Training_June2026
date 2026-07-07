# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\7delete_booking.spec.ts >> get booking details based on parameters
- Location: tests\api\7delete_booking.spec.ts:13:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 201
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | 
  3  | import {faker} from '@faker-js/faker';
  4  | import {DateTime} from 'luxon';
  5  | 
  6  | import createBookingPayload from '../../utils/create_booking_dynamic_payload.json'
  7  | import { stringFormat } from '../../utils/common';
  8  | import updateBookingPayload from '../../utils/create_booking_payload.json';
  9  | import authPayload from '../../utils/auth_token_payload.json';
  10 | 
  11 | const BASE_URL = 'https://restful-booker.herokuapp.com';
  12 | 
  13 | test("get booking details based on parameters", async({request})=>{
  14 |     const firstName = faker.person.firstName();
  15 |     const lastName = faker.person.lastName();
  16 |     const totalPrice = faker.number.int({min:100, max:1000});
  17 | 
  18 |     const checkInDate = DateTime.now().toFormat('yyyy-MM-dd');
  19 |     const checkOutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');
  20 | 
  21 |     const additionalNeeds = faker.string.alpha(10).toLowerCase();
  22 | 
  23 |     const dynamicRequestBody = stringFormat(JSON.stringify(createBookingPayload), firstName, lastName, totalPrice, checkInDate, checkOutDate, additionalNeeds);
  24 | 
  25 |     const dynamicPayload = JSON.parse(dynamicRequestBody);
  26 | 
  27 |     const response = await request.post(`${BASE_URL}/booking`, {
  28 |         data:dynamicPayload,
  29 |         headers:{
  30 |             "Content-Type":"application/json"
  31 |         }
  32 |     })
  33 | 
  34 |     expect(response.status()).toBe(200);
  35 |     expect(response.ok()).toBeTruthy();
  36 | 
  37 |     const responseBody = await response.json();
  38 | 
  39 |     console.log(responseBody);
  40 |      const booking_id = responseBody.bookingid;
  41 | 
  42 |     expect(responseBody.booking).toHaveProperty("firstname", firstName);
  43 |     expect(responseBody.booking).toHaveProperty("lastname", lastName);
  44 |     expect(responseBody.booking.bookingdates).toHaveProperty("checkin", checkInDate);
  45 |     expect(responseBody.booking.bookingdates).toHaveProperty("checkout", checkOutDate);
  46 |     expect(responseBody.booking).toHaveProperty("additionalneeds", additionalNeeds);
  47 | 
  48 |     console.log(" ************* Generate TOKEN **********");
  49 |     const tokenResponse = await request.post(`${BASE_URL}/auth`, {
  50 |         data:authPayload
  51 |     })
  52 | 
  53 |     const tokenResponseBody = await tokenResponse.json();
  54 |     const access_token = tokenResponseBody.token;
  55 | 
  56 |     console.log("******* Delete Booking*************");
  57 |     const deleteResponse = await request.delete(`${BASE_URL}/booking/${booking_id}`, {
  58 |         headers:{
  59 |             "Content-Type":"application/json",
  60 |             "Cookie":`token=${access_token}`
  61 |         }
  62 |     })
  63 |     
> 64 |     expect(deleteResponse.status()).toBe(200);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  65 |     expect(deleteResponse.statusText()).toBe("Created");
  66 | 
  67 |     expect(await deleteResponse.text()).toBe("Created");
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | })
  74 | 
```