# Miscellaneous: Hoppscotch requests

Start the API:

```bash
cd backend
npm start
```

In [Hoppscotch](https://hoppscotch.io), use either request below. The server accepts browser requests through CORS and supports both JSON and form-urlencoded POST bodies.

| Method | URL | Body |
| --- | --- | --- |
| GET | `http://localhost:8080/register?user=Himanshu` | None |
| POST | `http://localhost:8080/register` | JSON: `{ "user": "Himanshu", "password": "example" }` |

For the POST request, set `Content-Type` to `application/json` when using the JSON body.
