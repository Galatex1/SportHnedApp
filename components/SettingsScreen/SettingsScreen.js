import React from 'react';
import {Button, Text, View, AsyncStorage} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
            title="Odhlásit se"
            type="solid"
            color= "#f00"
            backgroundColor="#fff"
            onPress={ () => this.onLogout() }
        />
      </View>
    );
  }

  async onLogout() {
    try {
      AsyncStorage.getItem('token');
      AsyncStorage.removeItem('token');
      this.props.navigation.navigate("SignedOut"); // nefunguje navigace do SignedOut
    } catch (error) {
      console.log('logout err: ' + error.message);
    }
  }
}