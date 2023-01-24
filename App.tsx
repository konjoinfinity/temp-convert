
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
