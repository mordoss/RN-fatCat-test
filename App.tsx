import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Rockets from './screens/Rockets';
import CrewMembers from './screens/CrewMembers';
import { dark } from './styled/colors';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: dark.primaryLight,
        inactiveTintColor: dark.light,
        activeBackgroundColor: dark.darkBlue,
        inactiveBackgroundColor: dark.darkBlue,
        labelStyle: {
          fontSize: 20,
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen name="Crew Members" component={CrewMembers} />
      <Tab.Screen name="Rockets" component={Rockets} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
