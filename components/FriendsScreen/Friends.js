import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class Friends extends React.Component {


    constructor(props) {
      super(props)
  
      this.state = {

          users : [
             
          ],
      }
  

      this.getFriends();

      // this.props.navigation.navigate("Chat", { user: {
      //     "created": "2019-05-24 10:46:45",
      //     "email": "gTex@example.com",
      //     "firstname": "Galatex",
      //     "id": 2,
      //     "last_login": "2019-07-06 21:55:37",
      //     "lastname": "Dejv",
      //     "verified": 1,
      //   }
      // });
      
    }
  
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 20, justifyContent: "center", alignContent: "center", }}>
            <Text style={styles.text}>Přátelé</Text>
          </View>
          <View style={{ flex: 15}}>
            <ScrollView>
              {
                this.state.users.map((u, i) => {
  
                  var t = u.last_login ? u.last_login.split(/[- :]/) : 0;
                  var start = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
  
                  var end = Date.now();
                  var elapsed = end - start;
  
  
                  var msec = elapsed;
                  var dd = Math.floor(msec / 1000 / 60 / 60 / 24);
                  msec -= dd * 1000 * 60 * 60 * 24;
                  var hh = Math.floor(msec / 1000 / 60 / 60);
                  msec -= hh * 1000 * 60 * 60;
                  var mm = Math.floor(msec / 1000 / 60);
                  msec -= mm * 1000 * 60;
                  var ss = Math.floor(msec / 1000);
                  msec -= ss * 1000;
  
  
                  return (
                    <ListItem            
                      key={i}
                      roundAvatar
                      leftAvatar={{ title:  u.firstname.toUpperCase()[0]+u.lastname.toUpperCase()[0] }}
                      title={u.firstname +" "+ u.lastname}
                      bottomDivider
                      topDivider
                      chevron
                      subtitle = {isNaN(hh) ? "Naposledy online: Nikdy" : "Naposledy online: Pred "+dd+" dny "+hh+" hodinami "+mm+" minutami"}
                      onPress= {()=>{this.navigateToDetail(u);}}
                    />
                  );
                })
              }
            </ScrollView>
              
          </View>  
        </View>
      );
    }
  
    navigateToDetail(u)
    {
      this.props.navigation.navigate("Detail",{user: u })
    }
  
    getFriends = () => {
  
      let data = {
          method: 'GET',
          // body: JSON.stringify({
          //   email: this.state.email,
          //   password : this.state.password
          // }),
          headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
          }
        }
        return fetch('https://www.sporthned.cz/api/user/all', data)
                .then(response => response.json())  // promise
                .then(json => {
                  //console.log(json);
                  this.setState({ users: json.users }); 
  
  
                  
            
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
    text:{
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      paddingLeft: 10,
      marginLeft: 15,
      marginRight: 15,
      }
    });