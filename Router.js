import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './components/LoginScreen/LoginScreen.js'
import SignupScreen from './components/SignupScreen/SignupScreen.js'
import MainScreen from './components/Menu/Menu.js'

export const SignedOut = createStackNavigator({
    Login: {
      screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
          title: "LogIn", 
          header: null,
        })
    },
    Signup: {
      screen: SignupScreen,
        navigationOptions: ({navigation}) => ({
          title: "SignUp",
          header: null,
        })
    },
    
});
 
export const createRootNavigator = (signedIn = false) =>{ return createSwitchNavigator(
        {
            SignedIn: {
                screen: MainScreen,
                navigationOptions: ({navigation}) => ({
                    title: "LogIn",
                    header: null,
                })
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: ({navigation}) => ({
                    title: "SignUp",
                    header: null,
                })
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut",
        }
    ); 
}