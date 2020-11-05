//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from  './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples:[]
    };
  }

  componentDidMount() {
    /*Promise */
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      });
  }

  /*Forma antiga renderizar lista
  // renderList() {
  //   const textElements = this.state.peoples.map(people => {
  //     const {first} = people.name;
  //     return <Text key={first}> {first} </Text>
  //   });

    
    // const names = [
    //   'São Marcos',
    //   'Alex Cabeçudo',
    //   'Dudu Pereira'
    // ];
    // const textElements = names.map(name => {
    //   return <Text key={name}> {name} </Text>
    // });

    return textElements;
  }*/

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}
