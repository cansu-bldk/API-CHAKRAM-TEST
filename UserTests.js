const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {

    it("GET /v2/user/{userName}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/testqa1234");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });

    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 231213123321,
            "username": "cansu123",
            "firstName": "cansu",
            "lastName": "dirlik",
            "email": "cansu1@gmail.com",
            "password": "1234567",
            "phone": "56897456898",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "987456321"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });

    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 121212,
            "username": "ahmet58",
            "firstName": "ahmet",
            "lastName": "test",
            "email": "test123@gmail.com",
            "password": "987456",
            "phone": "45698712336",
            "userStatus": 0
          };

        const response = chakram.put("https://petstore.swagger.io/v2/user/testcan123", data);
        
        return response.then(function (res){
            // console.log(res.body);
            expect(res).to.have.status(200);
        })
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/testcan123");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


});