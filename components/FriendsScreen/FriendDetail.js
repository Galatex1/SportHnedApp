import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class FriendDetail extends React.Component {



  constructor(props) {
    super(props)

    this.state = {
        user: null,
    }

    const { navigation } = this.props;
    const user = navigation.getParam('user', null);

    //this.navigateToChat(user);

  }

  render() {

    const { navigation } = this.props;
    const user = navigation.getParam('user', null);


    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20, justifyContent: "center", alignContent: "center", }}>
          { <Text style={styles.text}>{user.firstname +" "+ user.lastname}</Text> }
        </View>
        <View style={{ flex: 15}}>
          <ScrollView>
            {

                  <ListItem            
                    key={0}
                    title={"Konverzace"}
                    bottomDivider
                    topDivider
                    chevron
                    subtitle = {""}
                    onPress= {()=>{this.navigateToChat(user);}}
                  />

            }
            <Text style={styles.text}>Společné akce</Text>
          </ScrollView>  
        </View>  
      </View>
    );
  }

  navigateToChat(u)
  {
    this.props.navigation.navigate("Chat", {user: u})
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
    marginTop: 15,
    }
  });