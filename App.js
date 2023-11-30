import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  const copyleftSymbol = String.fromCodePoint(0x1F12F);
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {await SplashScreen.hideAsync(); console.log('FONTS')}
  }, [fontsLoaded])

  if(!fontsLoaded) {console.warn('NO FONTS')}//return null

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
  textStyles: {
    fontFamily: 'extrabold',
    fontSize: 20,
  }
});
