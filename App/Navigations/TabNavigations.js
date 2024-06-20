import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourseScreen from '../Screen/MyCourseScreen';
import LeaderBoardScreen from '../Screen/LeaderBoardScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { StyleSheet, View ,Text} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    
    <Tab.Navigator >

      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MyCourseScreen" component={MyCourseScreen} />
      <Tab.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
