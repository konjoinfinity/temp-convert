
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  name: string
  value: string
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
    value={value}
    onChangeText={deg => func(deg)}
    blurOnSubmit={false}
    trailing={props => (
    <IconButton icon={props => <Icon name={icon} {...props} />} {...props} />)} />
  )
}

export default function App() {
  const [fahrenheit, setFahrenheit] = useState('')
  const [celsius, setCelsius] = useState('')
  const [kelvin, setKelvin] = useState('')

  return (


    // F to C => (68°F - 32) × 5/9 = 20 °C
    // C to F => 20°C × 9/5 + 32 = 68 °F
    // C to K => 10°C + 273.15 = 283.15 K
    // K to C => 300K - 273.15 = 26.85 °C
    // F to K => (60°F + 459.67) × 5/9 = 288.71 K
    // K to F => 300K × 9/5 - 459.67 = 80.33 °F

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Input name={'Fahrenheit'} value={fahrenheit} func={setFahrenheit} icon={'temperature-fahrenheit'}/>
      <Input name={'Celsius'} value={celsius} func={setCelsius} icon={'temperature-celsius'}/>
      <Input name={'Fahrenheit'} value={kelvin} func={setKelvin} icon={'temperature-kelvin'}/>
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
