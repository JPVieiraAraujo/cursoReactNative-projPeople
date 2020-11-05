import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {

    const {people} = props;
    const { title, first, last} = people.name;

    return (
        //`` é utilizado pelo JSX para transformar em string, exceto que ta dentro do ${}
            //codigo javaScript ou variaveis, na qual pode-se concatena-la.
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { `${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}` }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#161c19',
        
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
})


export default PeopleListItem;