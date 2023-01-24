
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


interface Props {
  name: string
  value: number
  set: Function
  icon: any
}

const Input: React.FC<Props> = ({name, value, set, icon}) => {
  return (
    <TextInput
    style={{width: Dimensions.get('screen').width * 0.8}}
    label={name}
    textAlign='right'
    keyboardType='decimal-pad'
    value={`${value}`}
    onChangeText={deg => {set(deg)}}
    blurOnSubmit={false}
    trailing={props => (
    <IconButton icon={props => <Icon name={icon} {...props} />} {...props} />)} />
  )
}

export default function App() {
  const [fahrenheit, setFahrenheit] = useState(32)
  const [celsius, setCelsius] = useState(0)
  const [kelvin, setKelvin] = useState(273.15)

  const convertAll = () => {
    // if(celsius == 0 && kelvin == 237.15)
    setCelsius((fahrenheit - 32) * 0.5556)
    console.log(fahrenheit + 459.67)
    setKelvin((fahrenheit + 459.67) * 0.5556)
    // let convertCtoF = celsius * 9/5 + 32
    // setFahrenheit(Math.round(convertCtoF*10)/10)
    // let convertCtoK = celsius + 273.15
    // setKelvin(Math.round(convertCtoK*10)/10)
    // let convertKtoC = kelvin - 273.15
    // setCelsius(Math.round(convertKtoC*10)/10)
    // let convertKtoF = kelvin * 9/5 - 459.67
    // setFahrenheit(Math.round(convertKtoF*10)/10)
  }
        

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Input name={'Fahrenheit'} value={fahrenheit} set={setFahrenheit} icon={'temperature-fahrenheit'}/>
      <Input name={'Celsius'} value={celsius} set={setCelsius} icon={'temperature-celsius'}/>
      <Input name={'Kelvin'} value={kelvin} set={setKelvin} icon={'temperature-kelvin'}/>
      <Button title="Convert" onPress={() => convertAll()} style={{marginBottom: Dimensions.get('screen').height * 0.1, marginTop:10, padding: 10}}/>
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
