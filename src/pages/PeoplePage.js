//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peoples:[],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      /*Promise */
      axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false,
            error: false,
          });
        }).catch(error => {
            this.setState({
              loading: false,
              error: true
            })
        });
    }, 1500);
    
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

//outra forma de fazer o condicional do Loading e Error
  /*renderPage() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#3cb53c" />
    }

    if (this.state.error) {
      return <Text style={styles.error}>Ops.. Deu ruim...</Text>
    }
    return (
      <PeopleList 
        peoples={this.state.peoples}
        onPressItem={pageParams => {
         this.props.navigation.navigate('PeopleDetail', pageParams);
          }} />
    );
  }*/

  render() {
    //this.props.navigation.navigate(/*chave da página*/, /*state*/)
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        {/* this.renderPage() */}
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#3cb53c" />
            : this.state.error
                ? <Text style={styles.error}>Ops.. Deu ruim...</Text>
                : <PeopleList 
                    peoples={this.state.peoples}
                    onPressItem={pageParams => {
                      this.props.navigation.navigate('PeopleDetail', pageParams);
                    }} />
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }
});