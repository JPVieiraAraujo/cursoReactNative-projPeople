//import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';

const AppNavigation = createStackNavigator ({
  Main: {
    screen: PeoplePage
  }

});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;