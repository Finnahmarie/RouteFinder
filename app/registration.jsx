import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'  
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'

const registration = () => {
  const router = useRouter();
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

      <View style={styles.create_AccContainer}>
        <Text style={styles.create_AccText}>Create an account</Text> 
      </View>

      <View style={styles.BottomImageContainer}>
        <Image
        source={require('../assets/images/GradientBottom.png')} 
        style={styles.BottomImage}
          />
      </View>

      <View style={styles.nameContainer}>
        <FontAwesome 
        name="user" 
        size={20} 
        color="#778B26" 
        style={styles.nameIcon}
        />
        <TextInput
          style={styles.nameText}
          placeholder='Name'
          placeholderTextColor={'#778B26'}
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

      <View style={styles.confirm_passwordContainer}>
        <MaterialIcons 
        name="lock" 
        size={20} 
        color="#778B26" 
        style={styles.confirm_passwordIcon}
        />
        <TextInput
          style={styles.confirm_password}
          placeholder='Confirm Password'
          placeholderTextColor={'#778B26'}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.SignupButton} onPress={() => router.push("/")}>
          <Text style={styles.SignupButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <Link href="/">
        <Text style={styles.loginText}>Login</Text>
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

  
    create_AccContainer: {
      marginTop: -100,
      marginBottom: 5,
      //blank
    },

    create_AccText: {
      textAlign: 'center',
      marginBottom: 10,
      fontStyle: 'poppins',
      fontSize: 32,
      fontWeight: 'bold',
      color: '#213A0F',
    },

    nameContainer: {
      backgroundColor: '#DEECA2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 10,
      marginLeft: 55,
      paddingHorizontal: 20,
      gap: 10,
    },

    nameText:{
      flex: 1,
      height: '100%',
      fontSize: 16,
      color: '#213A0F',
    },

    nameIcon: {
      marginLeft: 1,
    },

    inputContainer: {
      backgroundColor: '#DEECA2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 20,
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
      marginTop: 20,
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

    confirm_passwordContainer: {
      backgroundColor: '#DEECA2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      width: 300,
      height: 40,
      marginTop: 20,
      marginLeft: 55,
      paddingHorizontal: 20,
      gap: 10,
    },

    confirm_password: {
      flex: 1,
      height: '100%',
      fontSize: 16,
      color: '#213A0F',
    },

    confirm_passwordIcon: {
      marginLeft: 1,
    },

    SignupButton: {
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

    SignupButtonText: {
      color: '#213A0F',
      fontStyle: 'poppins',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',

    },

    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      gap: 5,
    },

    signupText: {
      fontSize: 14,
      color: '#213A0F',
    },

    loginText: {
      fontSize: 14,
      color: '#B0DC00',
      fontWeight: 'bold',
    },

})

export default registration