import React,{Component, useState} from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView,TouchableHighlight } from 'react-native';
import Header from './components/header'
import DadosUsuario from './components/dadosUsu'
import Constants from 'expo-constants';

var count = 1;

//vai gerar cada elemento
function Item({nome, sobrenome, email, avatar}){

  return (
    <View style={styles.Item}>
      <Text>{nome} {sobrenome} </Text>
    </View>
  );
}

class App extends Component {
  constructor(props){
    super(props)
  

this.state = {
  listdataUsu:[],
};

}

componentData(){
  this.fetchJSON();
}

fetchJSON(){
    fetch("https://reqres.in/api/users?page=5" + count)
    .then(response => response.json())
    .then((responseJson)=> {

      var listdataUsu = responseJson['data']

      this.setState({listdataUsu: listdataUsu})

    })
    .catch(error=>console.log(error))
  }
}

//renderização 
 render(){
    return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.state.listdataUsu}
        renderItem={
            ({item}) =>             
            <Item nome={item.f_name} sobrenome={item.l_name}/>
        }
        ListHeaderComponent={
          <View>
            <Text>Exemplo</Text>
            <TouchableHighlight
              onPress={
                () =>{
                  count= count==1?2:1
                  this.fetchJSON()
                }
              }
              >
              <Text style={{backgroundColor:'grey', textAlign: 'center'}}>Page {count}</Text>
            </TouchableHighlight>
          </View>
        }
        stickyHeaderIndices={[0]}
        />
    </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
