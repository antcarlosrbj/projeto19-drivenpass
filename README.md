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

[![thunderclient](https://img.shields.io/badge/thunder_client-000?style=for-the-badge)](https://github.com/antcarlosrbj/projeto19-drivenpass/blob/main/tests-by-thunder-client.json)

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


- POST /credential/create
    - Route to create a credential
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {
        "url": "http://www.google.com",
        "user": "Antonio",
        "password": "123",
        "title": "Google"
    }


- GET /credential/list-all
    - Route to see all credentials
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- GET /credential/id/6
    - Route to view a credential
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}
    

- DELETE /credential/id/29
    - Route to delete a credential
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- POST /secure_note/create
    - Route to create a secure note
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {
        "note": "Essa é uma anotação segura",
        "title": "Minha nota"
    }


- GET /secure_note/list-all
    - Route to see all secure notes
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- GET /secure_note/id/6
    - Route to view a secure note
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}
    

- DELETE /secure_note/id/29
    - Route to delete a secure note
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- POST /wifi/create
    - Route to create a wifi
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {
        "name": "Wifi preguicoso 5.8";
        "password": "nao-subo-escada";
        "title": "Wifi casa";
    }


- GET /wifi/list-all
    - Route to see all wifis
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- GET /wifi/id/6
    - Route to view a wifi
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}
    

- DELETE /wifi/id/29
    - Route to delete a wifi
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- POST /cards/create
    - Route to create a card
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {
        "number": "4091695023971327";
        "name": "ANZOR DESHERIYEV";
        "securityCode": "456";
        "expirationDate": "09/30";
        "password": "5648";
        "type": "credit";
        "title": "Meu cartão";
    }


- GET /cards/list-all
    - Route to see all cards
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}


- GET /cards/id/6
    - Route to view a card
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}
    

- DELETE /cards/id/29
    - Route to delete a card
    - headers: {
        "Authorization": "Bearer <TOKEN>"
    }
    - body: {}

```
