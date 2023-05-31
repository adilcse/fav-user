import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InputTextProps {
  icon: string;
  placeholder: string;
  style?: object
}

const InputText: React.FC<InputTextProps> = ({ icon, placeholder, style }) => {
  const [isFocused, setIsFocused] = useState(false);
  const barWidth = new Animated.Value(0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(barWidth, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(barWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedBarStyles = {
    borderBottomColor: isFocused ? 'red' : '#ccc',
    borderBottomWidth: barWidth.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    }),
    width: barWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <View style={{...styles.container, ...(style || {})}}>
      <Feather name={icon} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Animated.View style={[styles.bar, animatedBarStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2,
  },
});

export default InputText;
