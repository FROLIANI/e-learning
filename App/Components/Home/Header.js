import React from 'react';
import { View, Text, Image,StyleSheet, TextInput,  } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import coin from "../../../assets/images/coin.jpeg";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Header = () => {
    const {isLoaded,isSignedIn,user} = useUser();

  return isLoaded&& (
    <View>
    <View style ={styles.rowstyle}>
        <View style={styles.viewdetails}>
      <Image source={{uri:user?.imageUrl}} style ={styles.image} />

      <View style ={styles.details}>
        <Text style= {styles.welcome}>Welcome,</Text>
        <Text style={styles.name}>{user?.fullName}</Text>
      </View>
      </View>

      <View style={styles.coin_text}>
        <Image source={coin} style ={styles.coin} />
        <Text style ={styles.coinText}>8645</Text>
      </View>
    </View>

    <View style ={styles.search}>
      <TextInput style ={styles.TextInput} placeholder='Search for Courses'/>
      <FontAwesome5 name="search" size={24} color="black" />
    </View>

    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius:99
    },

    welcome:{
        color:Colors.WHITE,
        fontSize:16,
          fontFamily:'outfit'
    },

    name:{
        color:Colors.WHITE,
        fontSize:20,
        fontFamily:'outfit'
    },

    rowstyle:{
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      justifyContent:'space-between'
      
    },

    viewdetails:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    coin:{
      width:35,
      height:35,
      borderRadius:99
    },

    coinText:{
      color:Colors.WHITE,
      fontSize:16,
      fontFamily:'outfit'
    },

    coin_text:{
      display:'flex',
      flexDirection:'row',
      gap:15,
      alignItems:'center'
    },

    search:{
      backgroundColor:Colors.WHITE,
      padding:10,
      borderRadius:99,
      display:'flex',
      flexDirection:'row',
      gap:5,
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:10
      
    },
    TextInput:{
      fontFamily:"outfit",
      fontSize:16

    }
    
    


   
});