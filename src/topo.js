import React, {Component} from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default class Topo extends Component {
    render() {
      return (
        <ImageBackground style={styles.container} source={require('../image/jokenpo.jpeg')}>
        </ImageBackground>
        );
    }
}
