export default class User {
    static CurrentUser = {
        id: 0,
        Name : "",
        Surname : "",
        Email: "",
    }
    static getUserid()
    {
        return User.CurrentUser.id;
    }

    static getUserName()
    {
        return User.CurrentUser.Name;
    }

    static getUserSurname()
    {
        return User.CurrentUser.Surname;
    }

    static getUserEmail()
    {
        return User.CurrentUser.Email;
    }
}