import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BottomTabNavigation = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  return (
    <View style={styles.container}>
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem} onPress={() => console.log('Home')}>
        <Icon name="home" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('GraphicsScreen')}>
        <Icon name="analytics" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => console.log('Add')}>
        <Icon name="water" size={32} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('DevicesScreen')}>
        <Icon name="link" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => console.log('Profile')}>
        <Icon name="menu" size={28} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#244761',
    height: 90

  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#244761',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom:20
  },
  navItem: {
    padding: 10,
  },
});

export default BottomTabNavigation;
