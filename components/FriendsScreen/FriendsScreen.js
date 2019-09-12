import {createStackNavigator } from 'react-navigation';
import FriendDetail from '../FriendsScreen/FriendDetail.js';
import Friends from './Friends' 
import ChatScreen from '../ChatScreen/ChatScreen.js'


export default FriendsScreen = createStackNavigator({
  Friends: {
    screen: Friends,
      navigationOptions: ({navigation}) => ({
        header: null,
      })
  },
  Detail: {
    screen: FriendDetail,
      navigationOptions: ({navigation}) => ({
        header: null,
      })
  },
  Chat: {
    screen: ChatScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      })
  },
  
});

