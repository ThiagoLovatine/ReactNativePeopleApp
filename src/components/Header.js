import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

const Header = props => (
    <View>
        <View style={style.container}>
            <Text style={style.title}>{ props.title }</Text>
        </View>
    </View>
);



const style = StyleSheet.create({
    container : {
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title : {
        fontSize: 22,
        color: '#fff'
    }  
});

export default Header;