<p align="center">
  <a href="https://github.com/antcarlosrbj/projeto19-drivenpass">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" alt="DrivenPass-logo" width="100" height="100">
  </a>

  <h3 align="center">
    DrivenPass
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/antcarlosrbj/projeto19-drivenpass

$ cd projeto19-drivenpass

$ npm install

$ npx prisma init

$ npx prisma migrate dev

$ npx prisma generate

$ npm run dev
```

## API:

[![thunderclient](https://img.shields.io/badge/thunder_client-000?style=for-the-badge)](https://github.com/antcarlosrbj/projeto18-valex/blob/main/tests-by-thunder-client.json)

```
- POST /sign-up
    - Route to register new user
    - headers: {}
    - body: {
        "email": "antonio@antonio.com",
        "password": "1234567890"
    }


- POST /sign-in
    - Route to sign in
    - headers: {}
    - body: {
        "email": "antonio@antonio.com",
        "password": "1234567890"
    }
```
