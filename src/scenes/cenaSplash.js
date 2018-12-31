import React, {Component} from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

const stylebody = StyleSheet.create({
  parentContainer: {
    flex: 1,
  }
});

export default class CenaSplash extends Component {
    render() {
      return (
        <View style={stylebody.parentContainer}>
            <TouchableHighlight                
                onPress={() => {
                this.props.navigator.push({ id: 'b' });
            }}>
                <Text>OKOK</Text>
            </TouchableHighlight>
        </View>
      );
    }
  }