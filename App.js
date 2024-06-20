import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './App/Navigations/TabNavigations';
import * as Linking from 'expo-linking';

// Define the linking configuration
const linking = {
    prefixes: [Linking.createURL('/'), 'elearning://'],
    config: {
      screens: {
        HomeScreen: 'HomeScreen',
        MyCourseScreen: 'MyCourseScreen',
        LeaderBoardScreen: 'LeaderBoardScreen',
        ProfileScreen: 'ProfileScreen',
      },
    },
  };
  

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
        'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
        'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    });

    const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;
    // console.log(clerkPublishableKey);


    return (
        <ClerkProvider publishableKey={clerkPublishableKey}>
            <View style={styles.container}>
                <SignedIn>
                <Text style={styles.bb} >HELLOO</Text>
                
                    <NavigationContainer >
                        <TabNavigations />
                    </NavigationContainer>
                </SignedIn>
                <SignedOut>
                    <LoginScreen />
                </SignedOut>
            </View>
        </ClerkProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
bb:{
    fontSize: 30,
    color: 'red',
    textAlign: 'center',

}

});
