import React from 'react';
import { StyleSheet, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function maps() {
  return (
    <View style={styles.container}>
      
      <View style={styles.SearchContainer}>
        <TextInput style={styles.searchInput}
          placeholder="Search location..."
          placeholderTextColor="#999"    
        />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 8.4542,       
          longitude: 124.6319,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: 8.4542, longitude: 124.6319 }}
          title="Cagayan de Oro"
          description="Starting Point"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  SearchContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 4,
  },

});

