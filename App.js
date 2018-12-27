/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Topo from './src/topo';
import Footer from './src/footer';
import Body from './src/body';

const stylebody = StyleSheet.create({
  parentContainer: {
    flex: 1,
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={stylebody.parentContainer}>
        <Topo></Topo>
        <Body></Body>
        <Footer></Footer>
      </View>
    );
  }
}


