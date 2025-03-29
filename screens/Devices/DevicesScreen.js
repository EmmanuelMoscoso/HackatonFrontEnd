import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/DevicesStyles';
import BottomNavBar from '../../navigation/BottomNavBar';

const DevicesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dispositivos</Text>
            <ScrollView>
                <Text style={styles.subHeader}>Grupos</Text>
                <View style={styles.groupContainer}>
                    <TouchableOpacity style={styles.groupItem}><Text style={styles.groupText}>Baño</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.groupItem}><Text style={styles.groupText}>Exterior</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.groupItem}><Text style={styles.groupText}>Grupo Nuevo</Text></TouchableOpacity>
                </View>
                <Text style={styles.subHeader}>Dispositivos</Text>
                <DeviceItem name="Regadera" status="En línea" />
                <DeviceItem name="Baño" status="En línea" />
                <DeviceItem name="Lavabo" status="En línea" />
                <TouchableOpacity style={styles.connectButton}><Text style={styles.buttonText}>Conectar dispositivo</Text></TouchableOpacity>
                <TouchableOpacity style={styles.connectButton}><Text style={styles.buttonText}>Conectar dispositivo</Text></TouchableOpacity>
                <TouchableOpacity style={styles.connectButton}><Text style={styles.buttonText}>Conectar dispositivo</Text></TouchableOpacity>
            </ScrollView>
            <BottomNavBar/>
        </View>
    );
};

const DeviceItem = ({ name, status }) => (
    <TouchableOpacity style={styles.deviceItem}>
        <Ionicons name="hardware-chip-outline" size={24} color="white" />
        <View>
            <Text style={styles.deviceTitle}>{name}</Text>
            <Text style={styles.deviceStatus}>{status}</Text>
        </View>
    </TouchableOpacity>
);

export default DevicesScreen;