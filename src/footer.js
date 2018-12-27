import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      maxHeight: 60,
    },
  });

export default class Footer extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Jokenpo - React-native Example - 2018</Text>
          <Text>http://www.github.com/rafaelboschini</Text>
        </View>
        );
      }
  }