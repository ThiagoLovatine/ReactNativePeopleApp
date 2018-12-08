import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {

    const { people, onPressItem } = props;

    const items = people.map(obj => {
        return <PeopleListItem 
                    key={obj.name.first + ' ' + obj.id} 
                    people={obj} 
                    navigateToDetail={onPressItem} />
    });

    return(
        <View style={styles.container}>
            { items }
        </View>
    )
}

export default PeopleList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    
})