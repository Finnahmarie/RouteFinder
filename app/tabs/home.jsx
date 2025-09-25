import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      {/* Background */}
      <Image
        source={require("../../assets/images/bgimage.png")}
        style={styles.bgImage}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Header */}
        <LinearGradient
          colors={["#B4EC51", "#429321"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerContainer}
        >
          <Image
            source={require("../../assets/images/Avatar.png")}
            style={styles.avatar}
          />

          <Text style={styles.greeting}>Hey, Michael</Text>

          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>

        {/* Map Dashboard */}
        <View style={styles.mapdashboardContainer}>
          <Image
            source={require("../../assets/images/mapdb.png")}
            style={styles.mapdashboardImage}
          />
        </View>

        {/* Last Trips */}
        <View style={styles.lastTripContainer}>
          <Text style={styles.lastTripText}>Your last trips</Text>

          <View style={styles.tripGrid}>
            {Array.from({ length: 8 }).map((_, i) => (
              <ImageBackground
                key={i}
                source={require("../../assets/images/jeepneybg.png")}
                style={styles.tripCard}
                imageStyle={{ borderRadius: 12, resizeMode: "cover",  }}
              >
                <View style={styles.tripContent}>
                  <Image
                    source={require("../../assets/images/jeep.png")}
                    style={styles.tripIcon}
                  />
                  <Text style={styles.tripTitle}>R1 – Cogon to Bulua</Text>
                  <Text style={styles.tripFare}>Estimated fare: ₱12–₱15</Text>
                  <TouchableOpacity style={styles.heartButton}>
                    <Ionicons name="heart-outline" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  greeting: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },

  mapdashboardContainer: {
    alignItems: "center",
    marginTop: 15,
  },

  mapdashboardImage: {
    width: "90%",
    height: 180,
    borderRadius: 10,
    resizeMode: "cover",
  },

  lastTripContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  lastTripText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#213A0F",
  },

  tripGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  tripCard: {
    width: 160,
    height: 130,
    margin: 5,
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
  },

  tripContent: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
  },

  tripIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    backgroundColor: "#CCFF00",
    borderRadius: 5,
  },

  tripTitle: {
    fontWeight: "600",
    fontSize: 14,
    marginTop: -30,
    marginLeft: 35,
  },

  tripFare: {
    fontSize: 12,
    color: "gray",
    marginTop: 60,
  },

  heartButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Home;
