import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import ResutWin from './resultWin';
import ResutLose from './resultLose';

export default class Body extends Component {

    constructor(props){
        super(props);
        this.state = {  escolhaUsuario : '', 
                        escolhaComputador : '', 
                        resultado : ''
                        }
    }
    
    jokenpo(escolhaUsuario){
        

        var numAleatorio = Math.floor(Math.random() * 3);
        var escolhaComputador = '';
        var resultado = '';

        switch(numAleatorio){
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
        }        

        if(escolhaComputador == 'pedra'){
            if(escolhaUsuario == 'pedra'){
            resultado = 'Empate';
            }

            if(escolhaUsuario == 'papel'){
            resultado = 'Usuário ganhou';
            }

            if(escolhaUsuario == 'tesoura'){
            resultado = 'Computador ganhou';
            }
        }

        if(escolhaComputador == 'papel'){
            if(escolhaUsuario == 'papel'){
            resultado = 'Empate';
            }

            if(escolhaUsuario == 'tesoura'){
            resultado = 'Usuário ganhou';
            }

            if(escolhaUsuario == 'pedra'){
            resultado = 'Computador ganhou';
            }
        }

        if(escolhaComputador == 'tesoura'){
            if(escolhaUsuario == 'tesoura'){
            resultado = 'Empate';
            }

            if(escolhaUsuario == 'pedra'){
            resultado = 'Usuário ganhou';
            }

            if(escolhaUsuario == 'papel'){
            resultado = 'Computador ganhou';
            }
        }

        this.setState({ escolhaUsuario : escolhaUsuario,
                        escolhaComputador : escolhaComputador,
                        resultado : resultado
                        });
    }
    
    render() {
      return (
        <View style={styles.bodyContainer}>
            <Text style={styles.title}>Escolha uma opção</Text>

            <View style={styles.optionContainer}>
                <TouchableOpacity onPress={()=>{ this.jokenpo('papel') }} style={styles.optionButton}>
                    <Image source={require('../image/paper.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ this.jokenpo('pedra') }} style={styles.optionButton}>
                    <Image source={require('../image/rock.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ this.jokenpo('tesoura') }} style={styles.optionButton}>
                    <Image source={require('../image/scisor.png')} style={styles.optionButtonImage}></Image>
                </TouchableOpacity>
            </View>
            {(this.state.resultado==''?
                <View></View>
            :
               <View style={styles.resultContainer}>
                    <Text>Resultado {this.state.resultado}</Text>
                    <Text>O computador escolheu {this.state.escolhaComputador}</Text>
                    {(this.state.resultado=='Usuário ganhou'? <ResutWin></ResutWin> : <ResutLose></ResutLose>)}
                </View>
            )}
        </View> 
      );
    }
  }

  const styles = StyleSheet.create({
    bodyContainer: {
      flex: 2,
      backgroundColor: '#eeeeee',
      paddingTop: 10,
    },
    title:{
        fontSize: 24,
        color: '#333333',
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
    },
    resultContainer: {
        justifyContent: 'center',
        alignContent:'center',
    }
  });