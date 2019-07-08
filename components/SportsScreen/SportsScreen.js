import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MapView from 'react-native-maps'

export default class SportScreen extends React.Component {
  render() {
    return (
        <MapView style={{flex: 1}} />
    );
  }
}