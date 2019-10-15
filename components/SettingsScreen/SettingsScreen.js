import React from 'react';
import {Button, Text, View, AsyncStorage, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Notify from "../NotificationsScreen/Notify.js"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={styles.hlavni}>
          <View style={styles.middle}>
            <View style={{margin:10}}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{Notify.currentUser.surname}</Text>
                <Text>{Notify.currentUser.name}</Text>
                <Button
                    title="Odhlásit se"
                    type="solid"
                    color= "#f00"
                    backgroundColor="#fff"
                    onPress={ () => this.onLogout() }
                />
              </View>
            </View>
          </View>
        </View>
    );
  }

  async onLogout() {
    try {
      //AsyncStorage.getItem('token');
      AsyncStorage.removeItem('token');
      this.props.navigation.navigate("SignedOut");
    } catch (error) {
      console.log('logout err: ' + error.message);
    }
  }
}

const styles = StyleSheet.create({
  hlavni:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  middle: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 36
  },
  textInput:{
    height: 43,
    width: '75%',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    backgroundColor: '#e2dedb',
    alignItems: 'center',
    borderRadius: 10,
    padding: 7,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    width: 165,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});