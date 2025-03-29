import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fefefe',
    },
    registerContainer: {
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
    registerHeader: {
      marginBottom: 60,
    },
    registerTitle: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#1B4965',
    },
    registerSubtitle: {
      fontSize: 16,
      color: '#1B4965',
      opacity: 0.7,
    },
    registerForm: {
      width: '100%',
    },
    registerInputContainer: {
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
    registerInputLabel: {
      fontSize: 10,
      color: '#000',
      marginBottom: 5,
    },
    registerInput: {
      // Your input styles
    },
    forgotPasswordText: {
      color: '#1B4965',
      textAlign: 'right',
      marginBottom: 20,
    },
    registerButton: {
      backgroundColor: '#1D93D2',
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 40,
    },
    registerButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    loginText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#000',
    },
    loginLink: {
      textAlign: 'center',
      color: '#1D93D2',
      fontWeight: 'bold',
      height: 20,
      marginTop: 5,
    },
  });

  export default styles;