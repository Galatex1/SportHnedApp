export default class User {

    id = 0
    name = ""
    surname = ""
    email = ""
    info = ""
    description = ""

    constructor(_id, _name, _surname, _email) {
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
        this.email = _email;
    };



    /*
    "user": {
        "id": 11,
        "email": "Test@test.com",
        "firstname": "Test",
        "lastname": "Account",
        "verified": 0,
        "created": "2019-05-28 14:46:33",
        "token": "ExponentPushToken[O8holCMBi4Hh19feqT-aiM]"
    }
    */

    getUserid()
    {
        return this.id;
    }

    getUserName()
    {
        return this.name;
    }

    getUserSurname()
    {
        return this.surname;
    }

    getUserEmail()
    {
        return this.email;
    }

    getUserInfo()
    {
        return this.info;
    }

    getUserDescription()
    {
        return this.description;
    }
}