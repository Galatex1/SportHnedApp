export class User {

    constructor() {};

    id = 0
    name = ""
    surname = ""
    email = ""

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
}