import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChoiceAmenity from './src/pages/CreatePalace/ChoiceAmenity';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Airbnb</Text>
      <StatusBar style="auto" />
      <ChoiceAmenity />
      <Button title='Tiếp tục' />

    </View>
  );
}

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
