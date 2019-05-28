import * as React from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';


export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
          email: "",
          password: "",
          response: ""
        }
      }

  render() {
    return (
  <View style={styles.hlavni}>
  
        <View style={styles.middle}> 
            <Text>Přihlašte se!</Text>
            <Text>{this.state.response}</Text>
            <TextInput placeholder="Email" placeholderColor="#8b8e93" style={styles.textInput} onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
            <TextInput placeholder="Heslo" placeholderColor="#8b8e93" style={styles.textInput} secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
            <View style={{margin:10}}>
                <Button
                    title="Přihlásit se"
                    type="solid"
                    color= "#f00"
                    backgroundColor="#fff"
                    onPress={ () => this.onLogin() }
                />
            </View>
            <Button
                title="Registrovat"
                type="solid"
                // color= "#f00"
                textStyle={{ color: "#bcbec1" }}
                backgroundColor="transparent"
                onPress={() => this.props.navigation.navigate("Signup")}
            />
        </View>
        <View style={styles.bottom}>
            <Text> © SportHned 2019 - Všechna práva vyhrazena </Text>
        </View>
    </View>
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
              .then(json => {this.setState({ response: json.message }); console.log(json.message)})
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
  }
});
