import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import styles from '../../styles/RegisterStyles';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native-gesture-handler';

const RegisterScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Main content */}
      <View style={styles.registerContainer}>
        <View style={styles.registerHeader}>
          <Text style={styles.registerTitle}>Registrate</Text>
          <Text style={styles.registerSubtitle}>REGISTRATE PARA COMENZAR</Text>
        </View>
        <View style={styles.registerForm}>
          <View style={styles.registerInputContainer}> 
            <Text style={styles.registerInputLabel}> NOMBRE DE USUARIO</Text>
            <TextInput style={styles.registerInput} placeholder="Introduce tu correo" placeholderTextColor="#000" />
          </View>
          <View style={styles.registerInputContainer}> 
            <Text style={styles.registerInputLabel}> CORREO ELECTRONICO</Text>
            <TextInput style={styles.registerInput} placeholder="Introduce tu correo" placeholderTextColor="#000" />
          </View>
          <View style={styles.registerInputContainer}> 
            <Text style={styles.registerInputLabel}> CONTRASEÑA</Text>
            <TextInput style={styles.registerInput} placeholder="Introduce tu contraseña" secureTextEntry={true} placeholderTextColor="#000" />
          </View>
          <View style={styles.registerInputContainer}> 
            <Text style={styles.registerInputLabel}> CONFIRMA TU CONTRASEÑA</Text>
            <TextInput style={styles.registerInput} placeholder="Introduce tu contraseña" secureTextEntry={true} placeholderTextColor="#000" />
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
            <View style={{ marginTop: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginLink}>Inicia Sesión</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
      <ImageBackground 
        source={require('../../assets/images/waves.png')}
        style={styles.bottomDesign}
        resizeMode="stretch"
        imageStyle={{ position: 'absolute', bottom: -100, left: 0, right: 0, opacity: 1 }}
      />
    </View>
  );
}

export default RegisterScreen;

