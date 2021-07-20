import React from 'react';
import { Text, Button } from 'react-native';

import { MembersCard } from '../styled/cards';
import { IMember, IProps as INav } from '../screens/CrewMembers';

// eslint-disable-next-line prettier/prettier
interface IProps extends IMember, INav { }

const Rocket: React.FC<IProps> = ({ name, navigation }) => (
  <MembersCard>
    <Text>{name}</Text>
    <Button
      title="Go to Member"
      onPress={() => navigation.navigate('Crew Member', { name })}
    />
  </MembersCard>
);

export default Rocket;
