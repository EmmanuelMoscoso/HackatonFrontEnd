import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import BottomNavBar from '../../navigation/BottonTabNavigator';

const DashboardScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.dashboardHeader}>
            <Text style={styles.dashboardTitle}> Dashboard </Text>
            <Text style={styles.dashboardSubtitle}>+</Text>
        </View>
        <View style={styles.dashboardContainer}>
            

        
        </View>

        <BottomNavBar/>
    </View>
    
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1D93D2',
    },
    dashboardContainer: {
      flex: 1,
      marginHorizontal: 10,
      backgroundColor: '#fefefe',
      borderRadius: 10,
    },
    dashboardHeader: {
        marginTop: 60,
        marginBottom: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dashboardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    dashboardSubtitle: {
      fontSize: 24,
      color: '#fff'
    },


});