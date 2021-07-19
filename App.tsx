import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Rockets from './screens/Rockets';
import CrewMembers from './screens/CrewMembers';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Rockets" component={Rockets} />
      <Tab.Screen name="Crew Members" component={CrewMembers} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
