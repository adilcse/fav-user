import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, ScrollView } from 'react-native';
import {useSelector} from 'react-redux';
import { View, Text } from '../../components/Themed';
import UserCardRow from '../../components/UserCard';
import { useAppDispatch } from '../../redux/store';
import { addFav, removeFav } from '../../redux/reducers/favUserReducer';

export default function TabTwoScreen() {
  const favUsers = useSelector((state: any) => state.favorite?.users);
  const dispatch = useAppDispatch()
  return (
    <View style={styles.container}>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    <View style={styles.container}>
      {favUsers?.length ? <ScrollView
      >
        {favUsers.map((user: any, index: number) => (
          <UserCardRow key={user.id} user={user} onPress={() => user.isFavorite ? dispatch(removeFav(user)):dispatch(addFav(user))} />
        ))}
        
      </ScrollView> : 
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>No users marked as favorites</Text>
        </View>}
    </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e1e3e1",
    paddingTop: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e1e3e1",
  },
  title: {
    fontSize: 20,
    color: "black"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
