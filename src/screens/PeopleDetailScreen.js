import React from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet 
} from 'react-native';

export default class PeopleDetailScreen extends React.Component {

  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: people.picture.large }} 
          style={styles.avatar}/>
        <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={[ style.cell, styles.cellLabel ]}>Email:</Text>
            <Text style={[ styles.cell, styles.cellContent ]}>{ people.email }</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio:1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  },
  line: {
    flexDirection: 'row',
    paddingTop:3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: 'grey',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1,
  },
  cellLabel: {
    fontWeight: 'bold',
  },
  cellContent: {
  }
})
