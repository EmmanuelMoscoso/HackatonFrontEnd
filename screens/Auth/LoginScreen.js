import React from 'react'; 
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../styles/LoginStyles';


const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginTitle}>Iniciar Sesión</Text>
          <Text style={styles.loginSubtitle}>INICIA SESIÓN PARA CONTINUAR</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.loginInputContainer}> 
            <Text style={styles.loginInputLabel}> CORREO ELECTRONICO</Text>
            <TextInput style={styles.loginInput} placeholder="Introduce tu correo" placeholderTextColor="#000" />
          </View>
          <View style={styles.loginInputContainer}> 
            <Text style={styles.loginInputLabel}> CONTRASEÑA</Text>
            <TextInput style={styles.loginInput} placeholder="Introduce tu contraseña" secureTextEntry={true} placeholderTextColor="#000" />
          </View>
          <View>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen') }style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
            <View style={{ marginTop: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.registerLink}>Regístrate</Text>
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

export default LoginScreen;
