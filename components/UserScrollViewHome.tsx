import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import UserCardRow from './UserCard';
import {useSelector} from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { addFav, removeFav } from '../redux/reducers/favUserReducer';

export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    location: string;
    isFavorite: boolean;
};
const UserScrollViewHome: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState<User[]>([])
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch()
  const favUsers = useSelector((state: any) => state.favorite?.users);
  const fetchUsers = () => {
    setRefreshing(true);
    fetch('https://randomuser.me/api/?nat=us&results=10')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error(error))
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    return setUpdatedUser(users.map((user: any) => ({
          id: user?.login?.uuid,
          name: `${user.name.first || ''} ${user.name.last || ''}`,
          email: user.email,
          location: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
          image: user.picture.medium,
          isFavorite: !!favUsers?.find((u: any) => u.id == user?.login?.uuid)
      })));
  }, [users, favUsers])

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchUsers} />
        }
      >
        {updatedUser.map((user, index) => (
          <UserCardRow key={index} user={user} onPress={() => user.isFavorite ? dispatch(removeFav({
            ...user,
            isFavorite: false
          })):dispatch(addFav({
            ...user,
            isFavorite: true
          }))} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default UserScrollViewHome;
