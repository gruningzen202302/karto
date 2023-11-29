import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const copyleftSymbol = String.fromCodePoint(0x1F12F);

  return (
    <View style={styles.container}>
      <Text>{"This is KARTO App " + copyleftSymbol }</Text>
      <StatusBar style="auto" />
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
