import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChoiceAmenity from './src/pages/CreatePalace/ChoiceAmenity';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>đồ án l</Text>
      <StatusBar style="auto" />

      <ChoiceAmenity />
    </View>
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
