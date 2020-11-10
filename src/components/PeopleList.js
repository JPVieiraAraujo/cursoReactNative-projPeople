import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    //não utilizou-se mais, devido ao FlatList
    /*const items = peoples.map(people =>
            <PeopleListItem 
                key={people.name.first} 
                people={people}
                navigateToPeopleDetail={onPressItem} />
    );*/
    
    return (   
        //renderizando a variavel, basta coloca-la entre chaves; 
        /*<ScrollView style={styles.container}>
            {items}
        </ScrollView>*/

        //Utlilizando o FlatList para dar scroll
        <FlatList 
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={item => item.name.first} />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7de88f'
    }
});

export default PeopleList;