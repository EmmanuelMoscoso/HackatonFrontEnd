import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fefefe',
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      marginBottom: 100, // FIX to not use margin
    },
    bottomDesign: {
      width: '100%',
      height: 300,
      position: 'absolute',
      bottom: -100,
      opacity: 1, 
    },
    loginHeader: {
      marginBottom: 60,
    },
    loginTitle: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#1B4965',
    },
    loginSubtitle: {
      fontSize: 16,
      color: '#1B4965',
      opacity: 0.7,
    },
    loginForm: {
      width: '100%',
    },
    loginInputContainer: {
      marginBottom: 15,
      height: 60,
      borderWidth: 1,
      borderColor: '#1D93D2',
      borderRadius: 5,
      paddingHorizontal: 10,
      justifyContent: 'center',
      backgroundColor: '#fff',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    loginInputLabel: {
      fontSize: 10,
      color: '#000',
      marginBottom: 5,
    },
    loginInput: {
      // Your input styles
    },
    forgotPasswordText: {
      color: '#1B4965',
      textAlign: 'right',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#1D93D2',
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 40,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    registerText: {
      textAlign: 'center',
      color: '#000',
    },
    registerLink: {
      textAlign: 'center',
      color: '#1D93D2',
      fontWeight: 'bold',
      height: 20,
    },
  });

  export default styles;