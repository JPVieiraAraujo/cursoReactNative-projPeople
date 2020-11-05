import React from 'react';
import { View, Text } from 'react-native';

const PeopleList = props => {

    const {peoples} = props;
    const textElements = peoples.map(people => {
        const {first} = people.name;
        return <Text key={first}> {first} </Text>
    });
    
    return (   
        //renderizando a variavel, basta coloca-la entre chaves; 
        <View>
            {textElements}
        </View>
    )
};

export default PeopleList;