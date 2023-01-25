
import { View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Shadow } from 'react-native-shadow-2';

interface Props {
  name: string
  value: number
  set: Function
  icon: any
  unit: Function
}

const Input: React.FC<Props> = ({name, value, set, icon, unit}) => {
  return (
    <TextInput
    style={{width: Dimensions.get('screen').width * 0.8}}
    label={name}
    textAlign='right'
    keyboardType='decimal-pad'
    value={`${value}`}
    onChangeText={deg => set(deg)}
    onPressIn={() => unit(name)}
    blurOnSubmit={false}
    trailing={props => (
    <IconButton icon={props => <Icon name={icon} {...props} />} {...props} />)} />
  )
}

export default function App() {
  const [fahrenheit, setFahrenheit] = useState(32)
  const [celsius, setCelsius] = useState(0)
  const [kelvin, setKelvin] = useState(273.15)
  const [unit, setUnit] = useState('')

  const fToCandK = () => {
    let fToC = Number(fahrenheit) - 32 * 0.5556
    setCelsius(Math.ceil(fToC * 100) / 100)
    let fToK = 459.67 * 0.5556 + Number(fahrenheit)
    setKelvin(Math.ceil(fToK * 100) / 100)
  }

  const cToFandK = () => {
    let cToF = Number(celsius) / 0.5556 + 32
    setFahrenheit(Math.ceil(cToF * 100) / 100)
    let cToK = Number(celsius) + 273.15
    setKelvin(Math.ceil(cToK * 100) / 100)
  }

  const kToFandC = () => {
    let kToF = Number(kelvin) * 1.8 - 459.67
    setFahrenheit(Math.ceil(kToF * 100) / 100)
    let kToC = Number(kelvin) - 273.15
    setCelsius(Math.ceil(kToC * 100) / 100)
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1,backgroundColor: '#000',alignItems: 'center',justifyContent: 'center'}}>
      <Input name={'Fahrenheit'} value={fahrenheit} set={setFahrenheit} icon={'temperature-fahrenheit'} unit={setUnit}/>
      <Input name={'Celsius'} value={celsius} set={setCelsius} icon={'temperature-celsius'} unit={setUnit}/>
      <Input name={'Kelvin'} value={kelvin} set={setKelvin} icon={'temperature-kelvin'} unit={setUnit}/>
      <Button title="Convert" onPress={() => unit == 'Fahrenheit' ? fToCandK() : unit == 'Celsius' ? cToFandK() : kToFandC()} 
      style={{marginBottom: Dimensions.get('screen').height * 0.05, marginTop:10, padding: 10}}/>
    </View>
    </TouchableWithoutFeedback>
  );
}