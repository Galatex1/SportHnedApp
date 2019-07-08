import * as React from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';


export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      response: ""
    }
  }

  render() {
    return (

  <View style={styles.hlavni}>
    <View style={styles.middle}> 
      <Text>Registrace</Text>
      <Text>{this.state.response}</Text>
      <TextInput placeholder="Jméno" placeholderColor="#8b8e93" style={styles.textInput} onChangeText={(text) => this.setState({firstname: text})} value={this.state.firstname}/>
      <TextInput placeholder="Příjmení" placeholderColor="#8b8e93" style={styles.textInput} onChangeText={(text) => this.setState({lastname: text})} value={this.state.lastname} />
      <TextInput placeholder="Email" placeholderColor="#8b8e93" style={styles.textInput} onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
      <TextInput placeholder="Heslo" placeholderColor="#8b8e93" style={styles.textInput} onChangeText={(text) => this.setState({password: text})} value={this.state.password} secureTextEntry={true}/>
      <View style={{margin:10}}>
      <Button
        title="Registrovat"
        type="solid"
        color= "#f00"
        backgroundColor="#fff"
        onPress={ () => this.onSignUp() }
      />
      </View>
        <Button
            title="Přihlásit se"
            type="solid"
            // color= "#f00"
            textStyle={{ color: "#bcbec1" }}
            backgroundColor="transparent"
            onPress={ () => this.props.navigation.navigate("Login") }
        />
    </View>
    <View style={styles.bottom}>
      <Text> © SportHned 2019 - Všechna práva vyhrazena </Text>
    </View>
  </View>
    );
  }

  onSignUp = () => {
    let data = {
      method: 'POST',
      body: JSON.stringify({
        firstname : this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password : this.state.password
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }

    this.setState({ response: "Plase Wait..." });
    
    return fetch('https://www.sporthned.cz/api/user/create', data)
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
