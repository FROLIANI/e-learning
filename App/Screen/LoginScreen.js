import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import home from "../../assets/images/home.png";
import Colors from '../Utils/Colors';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={home} style={styles.img} />
      <View style={styles.imgview}>
        <Text style={styles.text1}
        >CodeINC</Text>
        <Text style ={styles.text2}>Your Ultimate Programming Learning </Text>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 500,
    objectFit: 'contain',
    marginTop: 70
  },
  imgview: {
    height: 400,
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    marginTop: -50,
    padding: 20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10

  },

  text1: {
    fontSize: 25,
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit-bold'
  },
  text2:{
    fontSize: 18,
    color: Colors.LIGHT_PRIMARY,
    textAlign: 'center',
    fontFamily: 'outfit'


  }

});
