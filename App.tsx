
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  name: string
  value: number
  func: Function
  icon: any
}

const Input: React.FC<Props> = ({name, value, func, icon}) => {
  return (
    <TextInput
    style={{width: Dimensions.get('screen').width * 0.8}}
    label={name}
    variant="outlined"
    keyboardType='decimal-pad'
    value={`${value}`}
    onChangeText={deg => func(deg)}
    blurOnSubmit={false}
    trailing={props => (
    <IconButton icon={props => <Icon name={icon} {...props} />} {...props} />)} />
  )
}

export default function App() {
  const [fahrenheit, setFahrenheit] = useState(32)
  const [celsius, setCelsius] = useState(0)
  const [kelvin, setKelvin] = useState(273.15)

  const fToCandK = () => {
    // F to C => (68°F - 32) × 5/9 = 20 °C
    let convertFtoC = (fahrenheit - 32) * 5/9
    setCelsius(convertFtoC)
    // F to K => (60°F + 459.67) × 5/9 = 288.71 K
    let convertFtoK = (fahrenheit + 459.67) * 5/9
    setKelvin(convertFtoK)
        }
  
  const cToFandK = () => {
    // C to F => 20°C × 9/5 + 32 = 68 °F
    let convertCtoF = celsius * 9/5 + 32
    setFahrenheit(convertCtoF)
    // C to K => 10°C + 273.15 = 283.15 K
    let convertCtoK = celsius + 273.15
    setKelvin(convertCtoK)
  }
        
  const kToCandF = () => {
    // K to C => 300K - 273.15 = 26.85 °C
    let convertKtoC = kelvin - 273.15
    setCelsius(convertKtoC)
    // K to F => 300K × 9/5 - 459.67 = 80.33 °F
    let convertKtoF = kelvin * 9/5 - 459.67
    setFahrenheit(convertKtoF)
  }
        

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Input name={'Fahrenheit'} value={fahrenheit} func={setFahrenheit} icon={'temperature-fahrenheit'}/>
      <Input name={'Celsius'} value={celsius} func={setCelsius} icon={'temperature-celsius'}/>
      <Input name={'Kelvin'} value={kelvin} func={setKelvin} icon={'temperature-kelvin'}/>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
