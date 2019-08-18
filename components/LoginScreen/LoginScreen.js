import * as React from 'react';
import { Button, Text, View, StyleSheet, TextInput, AsyncStorage, TouchableOpacity, ImageBackground } from 'react-native';
import registerForPushNotificationsAsync from '../NotificationsScreen/PushNotifications.js';


export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          email: "",
          password: "",
          response: ""
        }
      }

      componentDidMount() { AsyncStorage.multiGet(['token', 'userID']).then((data)=> {
          if (data[0][1]) {
              let tokenlogin = {
                  method: 'POST',
                  body: JSON.stringify({
                      token: data[0][1],
                      userID : data[1][1]
                  }),
                  headers: {
                      'Accept':       'application/json',
                      'Content-Type': 'application/json',
                  }
              }
              return fetch('https://www.sporthned.cz/api/user/tokenlogin', tokenlogin)
                  .then(response => response.json())  // promise
                  .then(json => {
                      this.setState({ response: json.message });
                      if(json.error == false && json.user.id != null && json.user.token != null)
                      {
                          this.props.navigation.navigate("SignedIn");
                      }
                  })
                  .catch((err)=>{console.log(err)})
          }
          else
          console.log("error");
      })
      }

    render() {
    return (
        <ImageBackground source={require('../../assets/splash.png')} style={{width: '100%', height: '100%'}}>
  <View style={styles.hlavni}>

        <View style={styles.middle}> 
            <Text>Přihlašte se!</Text>
            <Text>{this.state.response}</Text>
            <TextInput placeholder="Email" placeholderColor="#78849E" style={styles.textInput} onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
            <TextInput placeholder="Heslo" placeholderColor="#78849E" style={styles.textInput} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
            <View style={{margin:10}}>
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text style={styles.text}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.onPress}
            >
                <Text style={styles.text}>
                    Registrace
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottom}>
            <Text> © SportHned 2019 - Všechna práva vyhrazena </Text>
        </View>
    </View>
        </ImageBackground>
    );
  }

  onLogin = () => {

    let data = {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.email,
          password : this.state.password
        }),
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        }
      }
      return fetch('https://www.sporthned.cz/api/user/login', data)
              .then(response => response.json())  // promise
              .then(json => {
                this.setState({ response: json.message }); 
                console.log(json.message);
                if(json.error == false)
                {
                  console.log(json.user.id);
                  AsyncStorage.multiSet([
                    ["token", json.user.token],
                    ["userID", json.user.id.toString()] 
                  ]);
                  registerForPushNotificationsAsync(this.state.email);
                  this.props.navigation.navigate("SignedIn");

                }
          
              })
              .catch((err)=>{console.log(err)})
    
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
