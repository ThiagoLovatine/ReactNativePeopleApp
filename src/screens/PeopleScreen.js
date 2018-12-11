import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeopleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {

    this.setState({ loading: true })

    axios
      .get('https://randomuser.me/api?nat=us&results=250')
      .then((response) => {
        const { results } = response.data;

        this.setState({
          people: results,
          loading: false
        });

      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          loading: false
        })
      });
  }

  renderScreen() {
    /* Check loading */
    return this.state.loading ? 
      /* Show loading */
      <ActivityIndicator size="large" color="#faf" />
      /* Check error */
      : this.state.error ? 
      /* Show error */
      <Text style={styles.error}>Ops, algo deu errado ):</Text>
      /* Show screen if not loading and doesn't have errors */
      : <PeopleList onPressItem={pageParams => { this.props.navigation.navigate('PeopleDetail', pageParams) }} people={this.state.people} />;
  }



  render() {
    return (
      <View style={styles.container}>
        { this.renderScreen( )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    alignSelf: 'center'
  }
})
