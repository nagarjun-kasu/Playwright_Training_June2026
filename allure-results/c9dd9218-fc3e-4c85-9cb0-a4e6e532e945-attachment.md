# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\3create_booking.spec.ts >> create booking with dynamic payload
- Location: tests\api\3create_booking.spec.ts:11:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 1
+ Received  + 1

@@ -3,9 +3,9 @@
    "bookingdates": Object {
      "checkin": Any<String>,
      "checkout": Any<String>,
    },
    "depositpaid": Any<Boolean>,
-   "firstname": Any<Number>,
+   "firstname": "Johanna",
    "lastname": Any<String>,
    "totalprice": Any<Number>,
  }
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
  8  | 
  9  | const BASE_URL = 'https://restful-booker.herokuapp.com';
  10 | 
  11 | test("create booking with dynamic payload", async({request})=>{
  12 |     const firstName = faker.person.firstName();
  13 |     const lastName = faker.person.lastName();
  14 |     const totalPrice = faker.number.int({min:100, max:1000});
  15 | 
  16 |     const checkInDate = DateTime.now().toFormat('yyyy-MM-dd');
  17 |     const checkOutDate = DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');
  18 | 
  19 |     const additionalNeeds = faker.string.alpha(10).toLowerCase();
  20 | 
  21 |     const dynamicRequestBody = stringFormat(JSON.stringify(createBookingPayload), firstName, lastName, totalPrice, checkInDate, checkOutDate, additionalNeeds);
  22 | 
  23 |     const dynamicPayload = JSON.parse(dynamicRequestBody);
  24 | 
  25 |     const response = await request.post(`${BASE_URL}/booking`, {
  26 |         data:dynamicPayload,
  27 |         headers:{
  28 |             "Content-Type":"application/json"
  29 |         }
  30 |     })
  31 | 
  32 |     expect(response.status()).toBe(200);
  33 |     expect(response.ok()).toBeTruthy();
  34 | 
  35 |     const responseBody = await response.json();
  36 | 
  37 |     console.log(responseBody);
  38 | 
  39 |     expect(responseBody.booking).toHaveProperty("firstname", firstName);
  40 |     expect(responseBody.booking).toHaveProperty("lastname", lastName);
  41 |     expect(responseBody.booking.bookingdates).toHaveProperty("checkin", checkInDate);
  42 |     expect(responseBody.booking.bookingdates).toHaveProperty("checkout", checkOutDate);
  43 |     expect(responseBody.booking).toHaveProperty("additionalneeds", additionalNeeds);
  44 | 
  45 |     expect(typeof responseBody.bookingid).toBe("number");
  46 |     expect(typeof responseBody.booking.firstname).toBe("string");
  47 | 
> 48 |     expect(responseBody.booking).toMatchObject({
     |                                  ^ Error: expect(received).toMatchObject(expected)
  49 |     firstname: expect.any(Number),
  50 |     lastname: expect.any(String),
  51 |     totalprice: expect.any(Number),
  52 |     depositpaid: expect.any(Boolean),
  53 |     bookingdates: {
  54 |         checkin: expect.any(String),
  55 |         checkout: expect.any(String)
  56 |     },
  57 |     additionalneeds: expect.any(String)
  58 | });
  59 | 
  60 | 
  61 | 
  62 | 
  63 | })
  64 | 
```