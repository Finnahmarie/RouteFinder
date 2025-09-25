import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'  
import { Link, useRouter } from 'expo-router'


const index = () => {

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/tabs/home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopImageContainer}>
        <Image
        source={require('../assets/images/GradientTop.png')} 
        style={styles.TopImage}
          />
      </View>
      
      <View style={styles.pin_iconContainer}>
        <Image
        source={require('../assets/images/pin_icon.png')} 
        style={styles.pin_iconContainer}          
        />
      </View>

      <View style={styles.LogoContainer}>
        <Image
        source={require('../assets/images/RutaCDO.png')} 
        style={styles.LogoContainer}          
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text> 
      </View>

      <View style={styles.BottomImageContainer}>
        <Image
        source={require('../assets/images/GradientBottom.png')} 
        style={styles.BottomImage}
          />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons 
        name="email" 
        size={20} 
        color="#778B26" 
        style={styles.emailAddressIcon}
        />
        <TextInput
          style={styles.emailAddress}
          placeholder='Email'
          placeholderTextColor={'#778B26'}
          keyboardType='email-address'
        />
      </View>
    
      <View style={styles.passwordContainer}>
        <MaterialIcons 
        name="lock" 
        size={20} 
        color="#778B26" 
        style={styles.passwordIcon}
        />
        <TextInput
          style={styles.password}
          placeholder='Password'
          placeholderTextColor={'#778B26'}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.LoginButton}>
        <Text style={styles.LoginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Link href="/registration">
        <Text style={styles.createText}>Sign up</Text>
        </Link>

      </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
    },

    TopImageContainer: {
      //blank
    },

    TopImage: {
      width: 368.94,
      height: 500,
    },

    LogoContainer: {
      width: 300,
      height: 300,
      position: 'absolute',
      top: 60,
      left: 30,
    },

    BottomImageContainer: {
      width: 500,
      height: 500,
      marginTop: 350,
      marginLeft: 80,
      position: 'absolute',
    },

    pin_iconContainer: {
      width: 51,
      height: 65,
      position: 'absolute',
      top: 30,
      left: 15,
    },

  
    loginContainer: {
      marginTop: -90,
      marginBottom: 10,
      //blank
    },

    loginText: {
      textAlign: 'center',
      marginBottom: 10,
      fontStyle: 'poppins',
      fontSize: 32,
      fontWeight: 'bold',
      color: '#213A0F',
    },

    inputContainer: {
      backgroundColor: '#DEECA2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 15,
      marginLeft: 55,
      paddingHorizontal: 20,
      gap: 10,
    },
    
    emailAddress:{
      flex: 1,
      height: '100%',
      fontSize: 16,
      color: '#213A0F',
    },

    emailAddressIcon: {
      marginLeft: 1,
    },

    passwordContainer: {
      backgroundColor: '#DEECA2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 30,
      marginLeft: 55,
      paddingHorizontal: 20,
      gap: 10,
    },

    password: {
      flex: 1,
      height: '100%',
      fontSize: 16,
      color: '#213A0F',
    },

    passwordIcon: {
      marginLeft: 1,
    },

    forgotPasswordText: {
      textAlign: 'right',
      marginRight: 65,
      marginTop: 10,
      fontSize: 14,
      color: '#213A0F',
    },

    LoginButton: {
      backgroundColor: '#B0DC00',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 40,
      marginLeft: 55,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },

    LoginButtonText: {
      color: '#213A0F',
      fontStyle: 'poppins',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',

    },

    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      gap: 5,
    },

    signUpText: {
      fontSize: 14,
      color: '#213A0F',
    },

    createText: {
      fontSize: 14,
      color: '#B0DC00',
      fontWeight: 'bold',
    },
})

export default index