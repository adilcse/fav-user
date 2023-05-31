import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';

import InputText from '../components/InputText';
import MyButton from '../components/MyButton';
import { Text, View } from '../components/Themed';
const appLogo = require("../assets/images/app-logo.png");
export default function LoginScreen() {
  const [isInputValid, setIsInputValid] = React.useState(false);
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
        <Image source={appLogo} style={styles.image} />
        </View>

      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.textContainer}>
        <InputText style={styles.email} icon="user" placeholder='Enter Email'/>
        <InputText style={styles.email} icon="lock" placeholder='Enter Password'/>
        <MyButton title='LOGIN'  onPress={() => console.log("logging in")} style={styles.button}
         disabled={!isInputValid} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    height: '70%',
    width: '80%'
  },
  image: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 25,
    borderRadius: 50,
    padding: 10,
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  email: {
    width: "90%",
    marginBottom: 20
  },
  textContainer: {
    textAlign: "center",
    alignItems: "center"
  },
  button: {
    width: "80%"
  }
});
