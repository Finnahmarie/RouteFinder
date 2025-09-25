import { Tabs } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#B0DC00",
        tabBarStyle: {
          position: 'absolute',
          left: 30,
          right: 30,
          bottom: 50,
          borderRadius: 20,
          borderTopWidth: 0,
          elevation: 5, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          backgroundColor: '#fff',
          height: 65,
          width: '92%',
          marginLeft: 14,
          paddingBottom: 6,
          paddingTop: 12,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen 
        name="favorites"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#B0DC00" : "transparent",
                borderRadius: 8, 
                width: 40,        
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="heart-outline" color={focused ? "#fff" : color} size={22} />
            </View>
          ),
        }}
      />

      <Tabs.Screen 
        name="maps"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#B0DC00" : "transparent",
                borderRadius: 8, 
                width: 40,        
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="map-outline" color={focused ? "#fff" : color} size={22} />
            </View>
          ),
        }}
      />

      <Tabs.Screen 
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#B0DC00" : "transparent",
                borderRadius: 8, 
                width: 40,        
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="home-outline" color={focused ? "#fff" : color} size={22} />
            </View>
          ),
        }}
      />
      
      <Tabs.Screen 
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#B0DC00" : "transparent",
                borderRadius: 8, 
                width: 40,        
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="person-outline" color={focused ? "#fff" : color} size={22} />
            </View>
          ),
        }}
      />

      <Tabs.Screen 
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#B0DC00" : "transparent",
                borderRadius: 8, 
                width: 40,        
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="settings-outline" color={focused ? "#fff" : color} size={22} />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
