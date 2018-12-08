import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {

    const { people } = props;
    const { first, last, title } = people.name;
    console.log(people.name);

    return( 
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { `${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}` } 
            </Text>
        </View> 
    );
}


export default PeopleListItem;

const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        justifyContent: 'center'
    }, 
    lineText: {
        fontSize: 20,
        padding: 10,
    }
})