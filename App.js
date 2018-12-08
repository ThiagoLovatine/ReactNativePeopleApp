import { createStackNavigator, createAppContainer } from 'react-navigation';
import PeopleScreen from './src/screens/PeopleScreen';
import PeopleDetailScreen from './src/screens/PeopleDetailScreen';
import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
    'Main': {
        screen: PeopleScreen,
        navigationOptions: {
            title: 'Pessoas'
        }
    },
    'PeopleDetail': {
        screen: PeopleDetailScreen,
        navigationOptions: ({ navigation }) => {
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);

            return({
                title: peopleName
            })
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#faf'
        },
        headerTintColor: 'white'
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;