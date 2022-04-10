import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';

const SpecificResultScreen = ({ route, navigation }) => {
  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name='arrow-back' size={35} style={styles.arrowStyle} />
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'CourierPrime-Regular',
            fontSize: 36,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            paddingHorizontal: 10,
          }}
        >
          Specific Results
        </Text>
      </View>
      <Text style={{ fontFamily: 'CourierPrime-Regular' }}>
        {route.params.diagnosis}
      </Text>
    </Screen>
  );
};

//<Image
//source={{ uri: route.params.imageURI }}
//style={{ width: 200, height: 200 }}
///>;

export default SpecificResultScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  backButton: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    height: 40,
    width: '40%',
  },
  buttonText: {
    fontFamily: 'CourierPrime-Regular',
    fontSize: 25,
    alignSelf: 'center',
  },
  arrowStyle: {
    paddingHorizontal: 10,
  },
});