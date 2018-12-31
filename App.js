/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/scenes/cenaPrincipal';
import CenaSplash from './src/scenes/cenaSplash';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route,navigator) => {

          if(route.id==='b'){
            return(<CenaPrincipal navigator={navigator} />);
          }
          
          if(route.id==='a'){
            return(<CenaSplash navigator={navigator} />);
          }
        }}
      />
    );
  }
}


