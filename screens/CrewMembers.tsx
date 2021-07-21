import React, { useEffect, useState } from 'react';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import useFetch from '../hooks/useFetch';
import CrewMemberScreen from './CrewMember';
import Member from '../components/Member';
import { CrewMembersContainer } from '../styled/layout';
import { CREW as url } from '../APIs';
import { dark } from '../styled/colors';

export type IProps = {
  navigation: StackNavigationProp<any, any>;
};

export interface IMember {
  id?: string;
  name: string;
  image: string;
  agency: string;
  wikipedia: string;
  status: string;
}

const CrewMembersComponent: React.FC<IProps> = ({ navigation }) => {
  const { status, data, error } = useFetch<IMember[]>(url);
  const [crewMembers, setCrewMembers] = useState<IMember[]>();

  useEffect(() => {
    setCrewMembers(data);
  }, [data]);

  const renderCrewMembers = () =>
    crewMembers?.map((member) => (
      <Member
        key={member.id}
        name={member.name}
        navigation={navigation}
        image={member.image}
        agency={member.agency}
        wikipedia={member.wikipedia}
        status={member.status}
      />
    ));

  return <CrewMembersContainer>{renderCrewMembers()}</CrewMembersContainer>;
};

const MembersStack = createStackNavigator();

const CrewMembers = () => (
  <MembersStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: dark.darkBlue,
      },
      headerTintColor: dark.light,
    }}
  >
    <MembersStack.Screen name="Crew Members" component={CrewMembersComponent} />
    <MembersStack.Screen
      name="Crew Member"
      component={CrewMemberScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </MembersStack.Navigator>
);

export default CrewMembers;
