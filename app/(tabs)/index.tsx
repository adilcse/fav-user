import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';

import { Text, View } from '../../components/Themed';
import UserScrollViewHome from '../../components/UserScrollViewHome';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
       <UserScrollViewHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e1e3e1"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
