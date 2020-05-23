import React, {Component,useState} from 'react';
import {Text,View,StyleSheet,Modal,TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

export default class DadosUsuario extends React.Component {

  //state para controlar visibilidade do modal
  state = {
    modalVisible: false,
  }

  //troca o modo de visibilidade do modal
  alteraModal(visibilidade){
    this.setState({modalVisible: visibilidade});
  }


  //construtor para uso do props
  constructor(props){
    super(props);

    this.state = {
        f_name: '',
        l_name: '',
        email: '',
        avatar: ''
    };   
  }

  componentDidMount(){
    this.fetchJSON();

  }

//teste de dados com api
  fetchJSON(){
    fetch("https://reqres.in/api/users/5") 
    .then(response => response.json())
    .then((responseJson)=> {

      var f_name = responseJson['data']['first_name']
      var l_name = responseJson['data']['last_name']
      var email = responseJson['data']['email']
      var avatar = responseJson['data']['avatar']


      this.setState({f_name: f_name,
                     l_name: l_name,
                     email: email,
                     avatar: avatar})

    })
    .catch(error=>console.log(error))
  }

  //Renderização do Componente

  render(){
    return(
      <View>
        
        <Modal
          animationType = {'slide'}
          transparent = {false}
          visible = {this.state.modalVisible}
          onRequestClose= {() => console.log('Closet modal')}
        >
          <View style={styles.modal}>
            
            <Text>{this.state.f_name}</Text>
            <Text>{this.state.l_name}</Text>
            <Text>{this.state.email}</Text>
            <Text>{this.state.avatar}</Text>
            
            <TouchableHighlight
              onPress={
                ()=>{
                  this.alteraModal(!this.state.modalVisible)
                }}>
                    <Text style={styles.button}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </Modal>


        <TouchableHighlight
          onPress={
            ()=>{
              this.alteraModal(!this.state.modalVisible)
            }}>
          <Text style={styles.button}>Detalhes</Text>
        </TouchableHighlight>
     </View>
    );


  }
}

const styles = StyleSheet.create({
  button:{
    borderColor:'black',
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: 'red',
    textAlign: 'left',

  },
  modal: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    marginTop: 200,
    padding: 20,
  }
});

DadosUsuario.propTypes = { f_name: PropTypes.string.isRequired,
                          l_name: PropTypes.string.isRequired,
                          email: PropTypes.string.isRequired,
                          avatar: PropTypes.string.isRequired};