import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider,SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from 'expo-constants';

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
        'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
        'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    });

    const clerkPublishableKey = Constants.expoConfig.extra.clerkPublishableKey;

    return (
        <ClerkProvider publishableKey={clerkPublishableKey}>
            <View style={styles.container}>
                <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
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
});
