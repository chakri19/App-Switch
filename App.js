import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {Constants} from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from "./Screens/Facebook";
import Instagram from "./Screens/Instagram";

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer/>
      </View>
    )
  }
}

var tabNavigator = createBottomTabNavigator({
  Facebook: Facebook,
  Instagram: Instagram
})

const Appcontainer = createAppContainer(tabNavigator);