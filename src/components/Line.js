import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../util';


const Line = ({ label = "", content = ""}) => {
    return(
        <View style={styles.line}>
            <Text style={[ 
              styles.cell, 
              styles.cellLabel, 
              label.length > 8 ? styles.longLabel : null 
            ]}>{ label }</Text>
            <Text style={[ styles.cell, styles.cellContent ]}>{ capitalizeFirstLetter(content) }</Text>
        </View>
    );
}

export default Line;

const styles = StyleSheet.create({
    line: {
      flexDirection: 'row',
      paddingTop:3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: 'grey',
    },
    cell: {
      fontSize: 16,
      paddingLeft: 10,
    },
    cellLabel: {
      fontWeight: 'bold',
      flex: 2
    },
    cellContent: {
      flex: 4
    },
    longLabel: {
      fontSize:15 
    }
  })