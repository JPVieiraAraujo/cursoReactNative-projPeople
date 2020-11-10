//import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

const AppNavigation = createStackNavigator ({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage
  }
}, { 
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerStyle: {
      backgroundColor: '#3cb53c',
      borderBottomWidth: 1,
      borderBottomCollor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,

      flexGrow: 1,
      textAlign: 'center',
    }
  }
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;