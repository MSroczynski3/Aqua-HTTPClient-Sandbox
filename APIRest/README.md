# More advanced flow with REST API.
In this project I use the https://dummyjson.com API.

## Authentication steps

Login user and get token that should be used with the remaining API endpoints. You can use any user's credentials from [here](https://dummyjson.com/users)

1. Get authentication token  
    Endpoint [POST]: {baseUrl}/auth/login  
    headers: 'Content-Type': 'application/json'  
    Body:

   ```
    {
        username: 'username',
        password: 'password',
        expiresInMins: 30, // optional, defaults to 60
    }
   ```

   Response Code: 200  
   Response Body:

   ```
   {
        "id": 15,
        "username": "username",
        "email": "email@qq.com",
        "firstName": "firstName",
        "lastName": "lastName",
        "gender": "female",
        "image": "https://robohash.org/Jeanne.png?set=set4",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTIwOTAwMSwiZXhwIjoxNzExMjEyNjAxfQ.F_ZCpi2qdv97grmWiT3h7HcT1prRJasQXjUR4Nk1yo8"
   }
   ```

2. Get current auth user
    Endpoint [GET]: {baseUrl}/auth/me  
    headers:'Authorization': 'Bearer _ YOUR_TOKEN_HERE _'  
    Response Code: 200  
    Response Body:

   ```
   {
        "id": 15,
        "username": "username",
        "email": "email@qq.com",
        "firstName": "firstName",
        "lastName": "lastName",
        "gender": "female",
        "image": "https://image",
        ... // other user fields

   }
   ```

3. Refresh auth session
    Endpoint [GET]: {baseUrl}/auth/refresh  
    headers:'Authorization': 'Bearer _ YOUR_TOKEN_HERE _', 'Content-Type': 'application/json'  
    Body:

   ```
    {
        expiresInMins: 30, 
    }
   ```

   Response Code: 200  
   Response Body:

   ```
   {
        "id": 15,
        "username": "username",
        "email": "email@qq.com",
        "firstName": "firstName",
        "lastName": "lastName",
        "gender": "female",
        "image": "https://robohash.org/Jeanne.png?set=set4",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTIwOTAwMSwiZXhwIjoxNzExMjEyNjAxfQ.F_ZCpi2qdv97grmWiT3h7HcT1prRJasQXjUR4Nk1yo8"
   }
   ```