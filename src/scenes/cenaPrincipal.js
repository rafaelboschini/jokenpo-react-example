import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Topo from '../topo';
import Footer from '../footer';
import Body from '../body';

const stylebody = StyleSheet.create({
  parentContainer: {
    flex: 1,
  }
});

export default class CenaPrincipal extends Component {
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