



GET http://localhost:8080/api/users/1 HTTP/1.1
content-type: application/json




POST http://localhost:8080/api/users HTTP/1.1
content-type: application/json

{
    "username": "johndoe", 
    "password": "dsd1s321",
    "enabled": true,
    "registerDate": "2022-03-09T02:42:42.024+00:00",
    "name": "John", 
    "surname": "Doe",
    "email": "john.doe@gmail.com",
    "phone": "001 5555-9999"
}
