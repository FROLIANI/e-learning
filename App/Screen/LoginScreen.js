import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import home from "../../assets/images/home.png";
import * as WebBrowser from "expo-web-browser";
import Colors from '../Utils/Colors';
import GoogleLogo from "../../assets/images/GoogleLogo.png"
import { useOAuth } from "@clerk/clerk-expo";
import {useWarmUpBrowser} from "../../hooks/useWarmUpBrowser"

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
 
    <View style={styles.container}>
      <Image source={home} style={styles.img} />
      <View style={styles.imgview}>
        <Text style={styles.text1}
        >CodeINC</Text>
        <Text style={styles.text2}>Your Ultimate Programming Learning </Text>

        <TouchableOpacity 
        onPress={onPress}
        style={styles.signWith}>
          <Image source={GoogleLogo} style={styles.google} />
          <Text style={styles.googletext}>Sign in with Google </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',

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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10

  },

  text1: {
    fontSize: 25,
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit-bold'
  },
  text2: {
    fontSize: 18,
    color: Colors.LIGHT_PRIMARY,
    textAlign: 'center',
    fontFamily: 'outfit'
  },

  signWith: {
    backgroundColor: Colors.WHITE,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    marginTop: 15
  },

  google: {
    height: 40,
    width: 40,

  },

  googletext: {
    fontSize: 20,
    color: Colors.PRIMARY,
    fontFamily: 'outfit',

  }


});
