import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const styles = StyleSheet.create({
    bodyContainer: {
        flexDirection: 'column-reverse',
    },
    image: {
        width: 150,
        height: 150, 
        marginTop: 5,  
    },
    title:{
        fontSize: 24,
        marginTop: 5,  
        color: '#000000',
    }
});

export default class ResutLose extends Component {
    render() {
      return (
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>Você perdeu.</Text>
            <Image source={require('../image/poop.png')} style={styles.image}></Image>
        </View> 
      );
    }
  }