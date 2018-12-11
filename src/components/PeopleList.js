import React from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {

    const { people, onPressItem } = props;

    return(
        <FlatList
            style={styles.container}
            data={people}
            renderItem={({item}) => <PeopleListItem people={item} navigateToDetail={onPressItem} />}
            keyExtractor={item => item.name.first+Math.random()}
        />  

    )
}

export default PeopleList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    
})