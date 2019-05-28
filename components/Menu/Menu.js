import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../HomeScreen/HomeScreen'
import FriendsScreen from '../FriendsScreen/FriendsScreen'
import NotificationsScreen from '../NotificationsScreen/NotificationsScreen'
import SettingsScreen from '../SettingsScreen/SettingsScreen'
import SportScreen from '../SportsScreen/SportsScreen'


class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -4,
              top: -2,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 15,
              height: 11,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const NotificationIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={9} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Notifications') {
    iconName = `md-chatboxes`;
    IconComponent = NotificationIconWithBadge;
  } 
  else if (routeName === 'Settings') {
    iconName = `ios-build`;
  }
  else if (routeName === 'Home') {
    iconName = `md-home`;
  }
  else if (routeName === 'Sport') {
    iconName = `ios-play-circle`;
  }
  else if (routeName === 'Friends') {
    iconName = `md-contacts`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Notifications: { screen: NotificationsScreen },
      Sport: { screen: SportScreen },
      Friends: { screen: FriendsScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#000000',
        style: {
          backgroundColor: '#8CDE23',
        },
      },
      
    }
  )
);
