import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeopleScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      people: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://randomuser.me/api?nat=us&results=15')
    .then((response) => {
      const { results } = response.data;
      
      this.setState({
        people: results 
      });

    })
    .catch((error) => {
      console.log(error);
    });
  }

  

  render() {

    return (
      <View>
        <PeopleList 
          onPressItem={ pageParams => {
            this.props.navigation.navigate('PeopleDetail', pageParams)
          }}
          people={ this.state.people } /> 
      </View>
    );
  }
}
