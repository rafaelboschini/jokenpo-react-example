/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Topo from './src/topo';
import Footer from './src/footer';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 2,
    backgroundColor: '#eeeeee',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.parentContainer}>
        <Topo></Topo>

        <View style={styles.bodyContainer}>
          <Text>Body</Text>

        </View>

        <Footer></Footer>
      </View>
    );
  }
}


