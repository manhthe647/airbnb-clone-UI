import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from './src/screens/Guest/Favorite/Favorite';
// import ChoiceAmenity from './src/pages/Host/CreatePalace/ChoiceAmenity';
// import Home from './src/pages/Guest/Home/Home';
// import AuthStack from './src/navigation/AuthStack';
// import LoginScreen from './src/screens/LoginScreen';
// import TabNavigator from './src/navigation/TabNavigator';
//import AppStack from './src/navigation/AppStack';
//import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <Favorite />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Airbnb</Text>
//       {/* <StatusBar style="auto" /> */}
//       {/* <Home /> */}
//       {/* <ChoiceAmenity /> */}
//       <AuthStack/>
//     </View>
//   );
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
