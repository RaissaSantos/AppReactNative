import React, {Component} from 'react';
import {View ,Text, StyleSheet, Platform, Image} from 'react-native';

export default class Header extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){

    return(
      <View>
        <Text style={style.container}>
          Consulta usuário
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    width:'100%',
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    textAlign:'center',
    backgroundColor:'#16ade1',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  }
})