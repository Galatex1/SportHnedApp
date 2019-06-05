import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Notifications } from 'expo';
import MainScreen from './components/Menu/Menu.js'
import LoginScreen from './components/LoginScreen/LoginScreen.js'
import SignupScreen from './components/SignupScreen/SignupScreen.js'

//import SignedOut  from './Router.js'

import {createStackNavigator, createAppContainer} from 'react-navigation';
import { SignedOut, createRootNavigator } from './Router.js';

export default class AppScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      signedIn: false, 
      checkedSignIn: false,
      notifications : []
    };

  }

  render()
  {

    const App = createAppContainer( createRootNavigator(this.state.signedIn));
    return <App />; 

  }
}
    



