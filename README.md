# simple_login_API
Easy Login - and Auth  (Mongodb - NodeJs - Express) API

## Video Guide

https://www.youtube.com/watch?v=zsOGmMuwhT4

How to use it ? 

1. Clone the repo
2. npm install
3. open a console and type mongod to start MongoDB database
4. in a new console type npm start
5. use [Postman](https://www.getpostman.com/)
6. put http://localhost:3000/  --- and try:

## What can you do ?

### Register 

in postman (POST) - http://localhost:3000/register

``` javascript {
{
  "username" : "test",
  "password" : "123",
  "firstname" : "testName",
  "lastname" : "testLastName"
}

you will get a 200 OK confirmation code.

- - - -

### Login 

in postman (POST) - http://localhost:3000/login

``` javascript {
{
  "username" : "test",
  "password" : "123"
}

you will get a 200 OK confirmation code.

- - - -

Enjoy it 
