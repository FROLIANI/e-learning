import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Header from '../Components/Home/Header';
import Colors from '../Utils/Colors';

const HomeScreen = () => {
  return (
    <View>
   
     <View style ={styles.bg}>
     <Header/>
     </View>

    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.PRIMARY,
    height: 250,
    padding:20
    
  },

  
});
