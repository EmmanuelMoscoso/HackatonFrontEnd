import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/SettingsStyles';
import BottomNavBar from '../../navigation/BottomNavBar';
import { useNavigation } from '@react-navigation/native'; 


const SettingsScreen = ({navigation}) => {
    const handleLogout = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Configuración</Text>
            <ScrollView>
                <View style={styles.card}>
                    <SettingItem icon="person-outline" title="Mi cuenta" subtitle="Haz cambios a tu cuenta" />
                    <SettingItem icon="notifications-outline" title="Notificaciones" subtitle="Administra tus notificaciones" />
                    <SettingItem icon="accessibility-outline" title="Accesibilidad" subtitle="Lo que mejor funcione para ti" />
                    <SettingItem icon="options-outline" title="Preferencias" subtitle="Personaliza nuestra app" />
                    <SettingItem icon="log-out-outline" title="Cerrar sesión" subtitle="Cierra tu sesión actual" color="#D32F2F" onPress={(handleLogout)}/>
                </View>
                <View style={styles.card}>  
                    <SettingItem icon="information-circle-outline" title="Sobre nuestra app" />
                    <SettingItem icon="help-circle-outline" title="Ayuda y soporte" />
                    <SettingItem icon="help-outline" title="Preguntas frecuentes" />
                    <SettingItem icon="document-text-outline" title="Aviso de privacidad" />
                    <SettingItem icon="alert-circle-outline" title="Reportar un error" color="#D32F2F" />
                </View>
            </ScrollView>
            <BottomNavBar/>
        </View>
    );
};

const SettingItem = ({ icon, title, subtitle, color = '#1B4965', onPress }) => {
    return (
        <TouchableOpacity 
        style={styles.item}
        onPress={onPress}
        activeOpacity={0.7}
        accessible={true}
        accessibilityLabel={title}
        accessibilityHint={subtitle || `Navegar a ${title}`}>
            <Ionicons name={icon} size={24} color={color} />
            <View style={styles.textContainer}>
                <Text style={[styles.itemTitle, { color }]}>{title}</Text>
                {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#A0A0A0" />
        </TouchableOpacity>
    );
};

export default SettingsScreen;