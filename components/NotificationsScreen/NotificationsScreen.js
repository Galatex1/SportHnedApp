import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Notifications } from 'expo';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from './PushNotifications.js';
import {ListItem} from 'react-native-elements';
import Notify from './Notify.js';

export default class NotificationsScreen extends React.Component {

  
  constructor(props) {
    super(props)

    this.state = {
      notifications : Notify.getNotifications()
    };

  }



  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20, justifyContent: "center", alignContent: "center", }}>
          <Text style={styles.text}>Notifikace</Text>
        </View>
        <View style={{ flex: 15}}>
            <ScrollView>
                  {
                    this.state.notifications.map((n, i) => {
                      return (
                        <ListItem            
                          key={i}       
                          title={n.data.title}
                          bottomDivider
                          topDivider
                          chevron
                          subtitle = {n.data.message}
                          onPress= {()=>{Notify.removeNotification(i); this.setState( {notifications : Notify.getNotifications() } ); }}
                        />
                      );
                    })
                  }
          </ScrollView>  
        </View>  
      </View>
    );
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