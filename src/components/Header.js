import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Stateless | Functional
const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

/* StyleSheet */ //StyleSheet.create: componente da biblioteca, auxilia na produção, como erros.
const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#6fc787',

        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        color: '#dbd8e8',
    }
});

export default Header;