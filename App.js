import { StatusBar } from 'expo-status-bar';
import { InputAccessoryView, StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"

//tutorial video Javascript Finite State Machine
//https://youtu.be/5WrDgEPZeuI

class FiniteStateMachine {
  constructor() {
    this.states = {
      currentState: null, //"Pending", //null , //q0
      finalState: "Complete", //q1
      inicialState: "Pending", //q0
    }
    this.transition = {
      delta: (input, state = this.states.inicialState) => {
        console.log("input from delta", input)
        if (input.length === 0) return
        //let currentInput = input.shift()//TODO implement more efficient approach if it is easy to convert to othjer languages
        let currentInput = input[0]
        input = input.slice(1) //, input.length)
        let mapping = this.transition.mapping(state)
        this.states.currentState = mapping.get(currentInput)
        this.transition.delta(input, this.states.currentState)
      },
      mapping: (state) => {
        let stateMap = new Map()
        stateMap.set(
          "Pending",
          new Map([
            ["0", "Pending"],
            ["1", "On Hold"],
            ["2", "Processing"],
            ["3", "Cancelled"],
          ])
        )
        stateMap.set(
          "On Hold",
          new Map([
            ["0", "On Hold"],
            ["1", "Processing"],
            ["2", "Cancelled"],
            ["3", "Complete"],
            ["4", "Closed"],
            ["5", "Payment Review"],
            ["6", "Pending Payment"],
          ])
        )
        stateMap.set(
          "Processing",
          new Map([
            ["0", "On Hold"],
            ["1", "Cancelled"],
            ["2", "Complete"],
            ["4", "Payment Review"],
            ["5", "Pending Payment"],
          ])
        )
        stateMap.set(
          "Cancelled",
          new Map([
            ["0", "Cancelled"],
            ["1", "Complete"],
            ["2", "Closed"],
          ])
        )
        stateMap.set("Complete", new Map([["0", "Complete"]]))

        return stateMap.get(state)
      },
    }
  }

  evaluate(input) {
    console.log("input", input)
    this.transition.delta(input)
    let result
    this.states.currentState === this.states.finalState
      ? (result = true)
      : (result = false)
    return result
  }
}

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

  let shopOrderStateMachine = new FiniteStateMachine()
  let input = ["Pending", "Cancelled", "Complete"]
  let result = shopOrderStateMachine.evaluate(input)
  console.log("shopOrderStateMachine")
  console.warn(result)

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
