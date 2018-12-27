import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const styles = StyleSheet.create({
    bodyContainer: {
      flex: 2,
      backgroundColor: '#eeeeee',
    },
    title:{
        fontSize: 24,
        color: '#333333',
        borderWidth:2,
        borderColor: 'red',
        textAlign: 'center',
    },
    optionContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
    },
    optionButton:{
      width: 80,
      height: 80,
      borderRadius: 15,
      backgroundColor: '#40a7e0',
      padding: 20,
  
    },
    optionButtonImage: {
      width: 40,
      height: 40,      
    }
  });

export default class Body extends Component {
    render() {
      return (
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>Escolha uma opção</Text>

            <View style={styles.optionContainer}>
                <TouchableOpacity style={styles.optionButton}>
                <Image source={require('../image/paper.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                <Image source={require('../image/rock.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                <Image source={require('../image/scisor.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>
            </View>
        </View> 
      );
    }
  }