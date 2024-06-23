import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourseScreen from '../Screen/MyCourseScreen';
import LeaderBoardScreen from '../Screen/LeaderBoardScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'blue', 
      tabBarInactiveTintColor: 'gray',  
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({  color, size }) => (
          <FontAwesome name="home" size={24} color={color} />
        )
      }}/>
      <Tab.Screen name="My Course" component={MyCourseScreen} options={{
        tabBarIcon: ({  color, size }) => (
          <FontAwesome name="book" size={24} color={color} />
        )
      }}/>
       
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{
        tabBarIcon: ({  color, size }) => (
          <MaterialIcons name="leaderboard" size={24} color={color} />
        )
      }}/>
   
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({  color, size }) => (
          <FontAwesome name="user" size={24} color={color} />
        )
      }}/> 
    </Tab.Navigator>
  );
}
