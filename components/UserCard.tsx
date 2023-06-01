import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { User } from './UserScrollViewHome';
import TruncatedText from './TruncatedText';

interface UserCardRowProps {
  user: User;
  onPress: () => void;
}

const UserCardRow: React.FC<UserCardRowProps> = ({ user, onPress }) => {
  return (
    <View style={styles.container}>
        <Image uri={user.image} style={styles.image} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.locationContainer}>
        <FontAwesome size={18} color="#000" name="location-arrow" />
        <TruncatedText style={styles.location} text={user.location} maxLength={30}/>          
        </View>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <TouchableOpacity style={styles.iconButton} onPress={onPress}>
        {user.isFavorite ?
        <FontAwesome size={24} color="#000" name="star" />
        :<Feather size={24} color="#000" name="star" />

}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    width: '94%',
    marginHorizontal: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  location: {
    fontSize: 14,
    color: '#888'
  },
  iconButton: {
    marginLeft: 'auto',
  },
  locationContainer: {
    flexDirection: 'row',
    columnGap: 5
  }
});

export default UserCardRow;
