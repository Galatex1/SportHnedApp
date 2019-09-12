import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Notifications } from 'expo';
import MainScreen from './components/Menu/Menu.js'
import LoginScreen from './components/LoginScreen/LoginScreen.js'
import SignupScreen from './components/SignupScreen/SignupScreen.js'
import Notify from './components/NotificationsScreen/Notify.js'

//import SignedOut  from './Router.js'

import {createStackNavigator, createAppContainer} from 'react-navigation';
import { SignedOut, createRootNavigator } from './Router.js';

export default class AppScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      signedIn: false, 
      checkedSignIn: false,
      notifications : Notify.getNotifications()
    };

  }
  componentDidMount() {
    //registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    Notify.addNotification(notification);
    this.setState({update: true});
  };

  update()
  {
    this.setState({update: true});
  }

  render()
  {

    const App = createAppContainer( createRootNavigator(this.state.signedIn));

    return <App />; 

  }
}
    



