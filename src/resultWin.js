import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const styles = StyleSheet.create({
    bodyContainer: {
        flexDirection: 'column-reverse',
    },
    image: {
        width: 150,
        height: 150,    
    },
    title:{
        fontSize: 24,
        color: '#669264',
    }
});

export default class ResutWin extends Component {
    render() {
      return (
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>Parabéns você ganhou!</Text>
            <Image source={require('../image/win.png')} style={styles.image}></Image>
        </View> 
      );
    }
  }