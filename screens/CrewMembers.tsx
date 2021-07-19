import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CrewMember from './CrewMember';

const MembersStack = createStackNavigator();

const CrewMembersComponent = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button
      title="Go to Member"
      onPress={() => navigation.navigate('Crew Member', { name: 15465 })}
    />
  </View>
);

const CrewMembers = () => (
  <MembersStack.Navigator>
    <MembersStack.Screen name="Crew Members" component={CrewMembersComponent} />
    <MembersStack.Screen
      name="Crew Member"
      component={CrewMember}
      options={({ route }) => ({ title: route.params.name })}
    />
  </MembersStack.Navigator>
);

export default CrewMembers;
