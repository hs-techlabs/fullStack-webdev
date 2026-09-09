# Testing the Wanderlust API with Hoppscotch

1. Start MongoDB locally, then run `npm start` from the `majorproject` folder.
2. In Hoppscotch, use `http://localhost:8080` as the base URL. If the hosted
   Hoppscotch website cannot reach localhost, install and enable the
   [Hoppscotch Browser Extension](https://docs.hoppscotch.io/documentation/clients/web/extension).

## Requests

| Purpose | Method | URL |
| --- | --- | --- |
| Check API | `GET` | `http://localhost:8080/` |
| List listings | `GET` | `http://localhost:8080/listings` |
| Get one listing | `GET` | `http://localhost:8080/listings/:id` |
| Create a listing | `POST` | `http://localhost:8080/listings` |
| Update a listing | `PATCH` | `http://localhost:8080/listings/:id` |
| Delete a listing | `DELETE` | `http://localhost:8080/listings/:id` |

For `POST` and `PATCH`, select **Body → JSON** and send:

```json
{
  "title": "Beach Villa",
  "description": "A quiet home by the sea",
  "price": 1300,
  "location": "Goa",
  "country": "India"
}
```

The API accepts requests from Hoppscotch through CORS and returns JSON.
