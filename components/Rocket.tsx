import React from 'react';
import { Text } from 'react-native';

import { RocketCard } from '../styled/cards';
import { IRocket } from '../screens/Rockets';

const Rocket: React.FC<IRocket> = ({ name }) => (
  <RocketCard>
    <Text>{name}</Text>
  </RocketCard>
);

export default Rocket;
