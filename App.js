/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 2,
    borderColor: '#00FF00',
    borderWidth: 2,
  },
  othersContainer: {
    flex: 1,
    borderColor: '#FF0000',
    borderWidth: 2,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.parentContainer}>
        <Top></Top>
        <Body></Body>
        <Footer></Footer>
      </View>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <View style={styles.bodyContainer}>
        <Text>Body</Text>
      </View>
      );
    }
}

class Top extends Component {
  render() {
    return (
      <View style={styles.othersContainer}>
        <Text>[TOP]</Text>
      </View>
      );
    }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.othersContainer}>
        <Text>[FOOTER]</Text>
      </View>
      );
    }
}