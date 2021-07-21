import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NetInfo from '@react-native-community/netinfo';

import Rockets from './screens/Rockets';
import CrewMembers from './screens/CrewMembers';
import ErrorModal from './components/ErrorModal';
import { dark } from './styled/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  // handling internet connection info reffering to task
  const [isConnected, setNetInfo] = useState(true);
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setNetInfo(state.isConnected);
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <ErrorModal
        modalVisible={!isConnected}
        cancel={setNetInfo}
        message="internet connection"
      />
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
        <Tab.Screen name="Rockets" component={Rockets} />
        <Tab.Screen name="Crew Members" component={CrewMembers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
