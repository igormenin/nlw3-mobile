import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/MapMarker.png'
export default function OrphanagesMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -26.5036286,
          longitude: -49.0894519,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}
          coordinate={{
            latitude: -26.5030964,
            longitude: -49.0916655,
          }}
        >
          <Callout tooltip={true} onPress={() => {}} >
            <View style={styles.calloutContainer} >
              <Text style={styles.calloutText} >Lar da Menina</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer} >
        <Text style={styles.footerText}>
          02 orfanatos encontrados
        </Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() =>{}} >
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 16,
    justifyContent: 'center'
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanageButton: {
    width:56,
    height:56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
