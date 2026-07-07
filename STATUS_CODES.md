HTTP API Status Codes — Detailed Explanation
   
  HTTP status codes are 3-digit responses sent by a server to indicate the outcome of a client's request. They are grouped into 5 classes:

  ---
  1xx — Informational Responses

  The request was received; the server is continuing the process.

  ┌──────┬─────────────────────┬──────────────────────────────────────────────────────────────────┐
  │ Code │        Name         │                           Description                            │
  ├──────┼─────────────────────┼──────────────────────────────────────────────────────────────────┤
  │ 100  │ Continue            │ Server has received headers; client should send the body.        │
  ├──────┼─────────────────────┼──────────────────────────────────────────────────────────────────┤
  │ 101  │ Switching Protocols │ Server is switching protocols (e.g., to WebSocket).              │
  ├──────┼─────────────────────┼──────────────────────────────────────────────────────────────────┤
  │ 102  │ Processing          │ Server is processing the request, no response yet (WebDAV).      │
  ├──────┼─────────────────────┼──────────────────────────────────────────────────────────────────┤
  │ 103  │ Early Hints         │ Used to send preliminary response headers before final response. │
  └──────┴─────────────────────┴──────────────────────────────────────────────────────────────────┘

  ---
  2xx — Success

  The request was successfully received, understood, and accepted.

  ┌──────┬────────────────────────┬──────────────────────────────────────────────────────────┐
  │ Code │          Name          │                       Description                        │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 200  │ OK                     │ Standard success response.                               │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 201  │ Created                │ Request succeeded; a new resource was created (POST).    │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 202  │ Accepted               │ Request accepted but not yet processed (async).          │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 203  │ Non-Authoritative Info │ Metadata from a third-party copy, not the origin server. │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 204  │ No Content             │ Success, but no response body (common for DELETE).       │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 205  │ Reset Content          │ Client should reset the document view.                   │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 206  │ Partial Content        │ Used for range requests (e.g., resumable downloads).     │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 207  │ Multi-Status           │ WebDAV; multiple operations in one response.             │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 208  │ Already Reported       │ WebDAV; members of a binding already enumerated.         │
  ├──────┼────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 226  │ IM Used                │ Server applied instance-manipulations to the response.   │
  └──────┴────────────────────────┴──────────────────────────────────────────────────────────┘

  ---
  3xx — Redirection

  Further action needs to be taken to complete the request.

  ┌──────┬────────────────────┬────────────────────────────────────────────────────────────────┐
  │ Code │        Name        │                          Description                           │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 300  │ Multiple Choices   │ Multiple options for the resource.                             │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 301  │ Moved Permanently  │ Resource has been permanently moved to a new URL.              │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 302  │ Found              │ Resource temporarily found at a different URL.                 │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 303  │ See Other          │ Response to the request can be found at another URL (use GET). │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 304  │ Not Modified       │ Cached version is still valid (used with If-Modified-Since).   │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 305  │ Use Proxy          │ Deprecated — must use the proxy specified.                     │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 307  │ Temporary Redirect │ Method and body must not change.                               │
  ├──────┼────────────────────┼────────────────────────────────────────────────────────────────┤
  │ 308  │ Permanent Redirect │ Like 301 but method/body preserved.                            │
  └──────┴────────────────────┴────────────────────────────────────────────────────────────────┘

  ---
  4xx — Client Errors

  The request contains bad syntax or cannot be fulfilled by the server.

  ┌──────┬─────────────────────────────────┬──────────────────────────────────────────────────────────┐
  │ Code │              Name               │                       Description                        │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 400  │ Bad Request                     │ Malformed request syntax.                                │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 401  │ Unauthorized                    │ Authentication required or failed.                       │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 402  │ Payment Required                │ Reserved for future use (digital payments).              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 403  │ Forbidden                       │ Server understood but refuses to authorize.              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 404  │ Not Found                       │ Resource could not be found.                             │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 405  │ Method Not Allowed              │ HTTP method not supported for this resource.             │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 406  │ Not Acceptable                  │ No content matching the Accept headers.                  │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 407  │ Proxy Authentication Required   │ Authenticate with the proxy first.                       │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 408  │ Request Timeout                 │ Server timed out waiting for the request.                │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 409  │ Conflict                        │ Request conflicts with current resource state.           │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 410  │ Gone                            │ Resource permanently removed; no forwarding address.     │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 411  │ Length Required                 │ Content-Length header is required.                       │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 412  │ Precondition Failed             │ Precondition in headers evaluated to false.              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 413  │ Payload Too Large               │ Request body exceeds the server's limit.                 │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 414  │ URI Too Long                    │ URI exceeds allowable length.                            │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 415  │ Unsupported Media Type          │ Content-Type not supported.                              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 416  │ Range Not Satisfiable           │ Range value cannot be fulfilled.                         │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 417  │ Expectation Failed              │ Expectation in Expect header cannot be met.              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 418  │ I'm a Teapot                    │ RFC 2324 joke; indicates "I'm a teapot".                 │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 421  │ Misdirected Request             │ Request sent to a server that cannot respond.            │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 422  │ Unprocessable Entity            │ WebDAV; validation errors.                               │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 423  │ Locked                          │ Resource being accessed is locked (WebDAV).              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 424  │ Failed Dependency               │ Request failed because of a previous request (WebDAV).   │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 425  │ Too Early                       │ Server refuses to process potentially-replayed requests. │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 426  │ Upgrade Required                │ Client must switch to a different protocol.              │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 428  │ Precondition Required           │ Requires conditional request to prevent lost updates.    │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 429  │ Too Many Requests               │ Rate limit exceeded.                                     │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 431  │ Request Header Fields Too Large │ Headers are too large.                                   │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────────────┤
  │ 451  │ Unavailable For Legal Reasons   │ Content blocked for legal reasons (e.g., censorship).    │
  └──────┴─────────────────────────────────┴──────────────────────────────────────────────────────────┘

  ---
  5xx — Server Errors

  The server failed to fulfill a valid request.

  ┌──────┬─────────────────────────────────┬──────────────────────────────────────────────────┐
  │ Code │              Name               │                   Description                    │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 500  │ Internal Server Error           │ Generic server-side failure.                     │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 501  │ Not Implemented                 │ Server does not support the request method.      │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 502  │ Bad Gateway                     │ Invalid response from upstream server.           │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 503  │ Service Unavailable             │ Server is down or overloaded.                    │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 504  │ Gateway Timeout                 │ Upstream server did not respond in time.         │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 505  │ HTTP Version Not Supported      │ HTTP version used in request is not supported.   │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 506  │ Variant Also Negotiates         │ Server has a configuration error.                │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 507  │ Insufficient Storage            │ WebDAV; storage quota exceeded.                  │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 508  │ Loop Detected                   │ WebDAV; infinite loop in request processing.     │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 510  │ Not Extended                    │ Further extensions required for the request.     │
  ├──────┼─────────────────────────────────┼──────────────────────────────────────────────────┤
  │ 511  │ Network Authentication Required │ Client must authenticate to gain network access. │
  └──────┴─────────────────────────────────┴──────────────────────────────────────────────────┘

  ---
  Most Commonly Used in REST APIs

  ┌──────────────┬───────────────────────────────────┬─────────────────────────────────┐
  │   Category   │               Codes               │        Typical Use Case         │
  ├──────────────┼───────────────────────────────────┼─────────────────────────────────┤
  │ Success      │ 200, 201, 204                     │ GET/PUT/PATCH/POST/DELETE       │
  ├──────────────┼───────────────────────────────────┼─────────────────────────────────┤
  │ Client Error │ 400, 401, 403, 404, 409, 422, 429 │ Validation, auth, rate-limiting │
  ├──────────────┼───────────────────────────────────┼─────────────────────────────────┤
  │ Server Error │ 500, 502, 503, 504                │ Back-end failures               │
  └──────────────┴───────────────────────────────────┴─────────────────────────────────┘

  Quick Tips for API Testing (relevant to your 7delete_booking.spec.ts)

  - 200 OK → success with body (common in fake API responses like restful-booker)
  - 201 Created → after POST creating a resource
  - 204 No Content → after a successful DELETE
  - 401 Unauthorized → missing/invalid token
  - 403 Forbidden → token lacks required permissions
  - 404 Not Found → booking ID doesn't exist (very common in DELETE)