import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const copyleftSymbol = String.fromCodePoint(0x1f12f)
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {"This is KARTO App " + copyleftSymbol}
      </Text>

      <Text style={{ fontSize: 10 }}>STATE vs STATUS</Text>
      <Text style={{ fontSize: 18 }}>SHOP ORDER: STATE LIST</Text>
      <Text>0. Cancelled</Text>
      <Text>1. Closed</Text>
      <Text>2. Complete</Text>
      <Text>3. Payment Review</Text>
      <Text>4. Processing</Text>
      <Text>5. On Hold</Text>
      <Text>6. Pending</Text>
      <Text>7. Pending Payment</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "extrabold",
    fontSize: 25,
  },
})
