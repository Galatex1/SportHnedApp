export default class Notify {
    static notifications = [];
    static currentUser = {
        id : 0,
        email : "",      
    }

    static getNotifications() {
        return Notify.notifications;
    }

    static addNotification(notification)
    {
        Notify.notifications.push(notification);
    }

    static removeNotification(i)
    {
        Notify.notifications.splice(i, 1);
    }

    static getUserID()
    {
        return Notify.currentUser.id;
    }

    static getUserEmail()
    {
        return Notify.currentUser.email;
    }

}