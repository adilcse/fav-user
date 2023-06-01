import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import Colors from '../constants/Colors';

interface InputTextProps {
  icon: string;
  placeholder: string;
  style?: object;
  value: string;
  onChange: (text: string) => void;
  isSecureText?: boolean;
}

const InputText: React.FC<InputTextProps> = ({ icon, placeholder, style, value, onChange, isSecureText=false }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{...styles.container, ...(style || {})}}>
    <TextInput
    label=""
    style={styles.input}
    activeUnderlineColor={Colors.light.tint}
    activeOutlineColor={Colors.light.tint}
    placeholder={placeholder}
    value={value}
    secureTextEntry={isSecureText}
    onChangeText={onChange}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    left={<TextInput.Icon icon={icon} iconColor={isFocused?Colors.light.tint : Colors.light.tabIconDefault} />}
  />
  </View>
  )
  // return (
  //   <View style={{...styles.container, ...(style || {})}}>
  //     <Feather name={icon} size={20} style={styles.icon} />

  //     <TextInput
  //       style={styles.input}
  //       placeholder={placeholder}

  //       value={value}
  //       onChangeText={onChange}
  //     />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    backgroundColor: "#fff"
  },
});

export default InputText;
