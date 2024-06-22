import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourseScreen from '../Screen/MyCourseScreen';
import LeaderBoardScreen from '../Screen/LeaderBoardScreen';
import ProfileScreen from '../Screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="My Course" component={MyCourseScreen} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
