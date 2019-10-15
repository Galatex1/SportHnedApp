import React from 'react';
import {Button, Text, View, AsyncStorage, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Notify from "../NotificationsScreen/Notify.js"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../../assets/profilepicblank.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{Notify.currentUser.name} {Notify.currentUser.surname}</Text>
              <Text style={styles.info}>Fotbal / Běh</Text>
              <Text style={styles.description}>Popis</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={ () => this.onLogout() }>
                <Text>Odhlásit se</Text>
              </TouchableOpacity>
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
  header:{
    backgroundColor: "#059B4B",
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "grey",
    marginBottom: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: 80,
    marginLeft: 20
  },
  body:{
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#04C10B",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#404040",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#04C10B",
  },
});