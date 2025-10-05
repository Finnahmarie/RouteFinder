import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import { Octicons, FontAwesome5, MaterialIcons, } from '@expo/vector-icons';


const settings = () => {

  const [isNotifEnabled, setIsNotifEnabled] = React.useState(false);
  const [isAppNotifEnabled, setIsAppNotifEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.TopImageContainer}>
        <Image
        source={require('../../assets/images/CornerGradient.png')} 
        style={styles.TopImage}
        />
      </View>

      <View style={styles.BottomImageContainer}>
        <Image
        source={require('../../assets/images/GradientBottom.png')} 
        style={styles.BottomImage}
        />
      </View>

      <View style={styles.SettingsContainer}>
        <Text style={styles.SettingsText}>Settings</Text> 
      </View>

      <View style={styles.accountContainer}>
        <View style={styles.accountRow}>
          <Octicons name="person" color="#000" size={30} style={styles.accountIcon}/>
          <Text style={styles.accountText}>Account</Text>
        </View>
      </View>

      <View style={styles.ChangePassContainer}>
        <TouchableOpacity style={styles.ChangePassRow}>
          <Text style={styles.ChangePassText}>Change Password</Text>
          <FontAwesome5 name="chevron-right" color="#000" size={24} style={styles.ChangePassIcon}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.HeadNotificationsContainer}>
        <View style={styles.HeadNotificationsRow}>
          <MaterialIcons name="notifications-none" color="#000" size={30} style={styles.NotificationsIcon}/>
          <Text style={styles.HeadNotificationsText}>Notifications</Text>
        </View>
      </View>

      <View style={styles.NotificationsContainer}>
        <View style={styles.NotificationsRow}>
          <Text style={styles.NotificationsText}>Notifications</Text>
          <Switch 
            trackColor={{ false: "#f4f3f4", true: "#3e3e3e" }}
            thumbColor={isNotifEnabled ? "#f4f3f4" : "#767577"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsNotifEnabled(prev => !prev)}
            value={isNotifEnabled}
          />
        </View>
      </View>

      <View style={styles.AppNotificationsContainer}>
        <View style={styles.AppNotificationsRow}>
          <Text style={styles.AppNotificationsText}>App Notifications</Text>
          <Switch 
            trackColor={{ false: "#f4f3f4", true: "#3e3e3e" }}
            thumbColor={isAppNotifEnabled ? "#f4f3f4" : "#767577"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsAppNotifEnabled(prev => !prev)}
            value={isAppNotifEnabled}
          />
        </View>
      </View>

      <View style={styles.MoreContainer}>
        <View style={styles.MoreRow}>
          <MaterialIcons name="more-vert" color="#000" size={30} style={styles.MoreIcon}/>
          <Text style={styles.MoreText}>More</Text>
        </View>
      </View>

      <View style={styles.AppLanguageContainer}>
          <TouchableOpacity style={styles.AppLanguageRow}>
            <Text style={styles.AppLanguageText}>App Language</Text>
            <FontAwesome5 name="chevron-right" color="#000" size={24} style={styles.AppLanguageIcon}/>
          </TouchableOpacity>
      </View>

      <View style={styles.LogOutContainer}>
        <TouchableOpacity style={styles.LogOutRow}>
          <MaterialIcons name="logout" color="#000" size={24} style={styles.LogOutIcon}/>
          <Text style={styles.LogOutText}>Log out</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles =StyleSheet.create({
    container: {
      backgroundColor: '#EAF7C0',
      flex: 1,
    },
    TopImageContainer: {
      //blank
    },

    TopImage: {
      width: 368.94,
      height: 500,
    },

    BottomImageContainer: {
      width: 500,
      height: 500,
      marginTop: 350,
      marginLeft: 80,
      position: 'absolute',
    },

    SettingsContainer: {
      width: 300,
      height: 300,
      position: 'absolute',
      top: 80,
      left: -50,
    },

    SettingsText: {
      textAlign: 'center',
      marginBottom: 10,
      fontStyle: 'poppins',
      fontSize: 36,
      fontWeight: 'bold',
      color: '#213A0F',
    },
    accountContainer: {
      marginTop: -330,
      paddingHorizontal: 20,
      marginLeft: 15,
    },
    accountRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    accountIcon: {
      marginRight: 10,
    },
    accountText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
      fontWeight: 'bold',
    },

    ChangePassContainer: {
      marginLeft: 67,
    },
    ChangePassRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ChangePassIcon: {
      marginLeft: 175,
    },
    ChangePassText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
    },

    HeadNotificationsContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
      marginLeft: 10,
    },
    HeadNotificationsRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    NotificationsIcon: {
      marginRight: 5,
    },
    HeadNotificationsText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
      fontWeight: 'bold',
    },
    NotificationsContainer: {
      paddingHorizontal: 20,
      marginLeft: 45,
    },
    NotificationsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    NotificationsText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
    },
    AppNotificationsContainer: {
      marginTop: -10,
      paddingHorizontal: 20,
      marginLeft: 43,
    },
    AppNotificationsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    AppNotificationsText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
    },
    MoreContainer: {
      marginTop: 15,
      paddingHorizontal: 20,
      marginLeft: 9,
    },
    MoreRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    MoreIcon: {
      marginRight: 5,
    },
    MoreText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
      fontWeight: 'bold',
    },
    AppLanguageContainer: {
      marginTop: 10,
      paddingHorizontal: 20,
      marginLeft: 43,
    },
    AppLanguageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    AppLanguageText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
      fontWeight: 'bold',
    },
    AppLanguageIcon: {
      marginRight: 20,
    },
    LogOutContainer: {
      marginTop: 10,
      paddingHorizontal: 20,
      marginLeft: 15,
    },
    LogOutRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    LogOutIcon: {
      marginRight: 15,
    },
    LogOutText: {
      fontSize: 14,
      color: "#000",
      marginTop: 4,
      marginLeft: -10,
      fontWeight: 'bold'
    },
  })

export default settings