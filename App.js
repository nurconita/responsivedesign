import React, {Component} from 'react';
import { Text, View, StyleSheet,
TextInput, TouchableOpacity,
Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewWrapper}>
        <Text style={styles.textTitle}>Selamat Datang</Text>
        <Text style={styles.textTitle}>di</Text>
        <Text style={styles.textTitle}>React Native</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  viewContainer: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  viewButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: '#43b2ec',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1.1)
  },
  textButton: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: responsiveFontSize(2.2)
  },
  viewWrapper: {
    alignItems: 'center'
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#43b2ec'
  }
});
