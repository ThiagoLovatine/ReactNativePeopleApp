import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {

    const { people, navigateToDetail } = props;
    const { first, last, title } = people.name;
    const { thumbnail } = people.picture;
 
    return( 
        <TouchableOpacity onPress={ () => { navigateToDetail({ people }) }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }} />
                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(title)
                    }  ${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)
                    }` } 
                </Text>
            </View> 
        </TouchableOpacity>
    );
}


export default PeopleListItem;

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row',
        
    }, 
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 25,
    }
})