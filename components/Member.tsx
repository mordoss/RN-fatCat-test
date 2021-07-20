import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import {
  MediumBold,
  SmallNormal,
  SmallBold,
  MediumNormal,
  MediumItalic,
} from '../styled/typography';

import { MembersCard } from '../styled/cards';
import { IMember, IProps as INav } from '../screens/CrewMembers';

// eslint-disable-next-line prettier/prettier
interface IProps extends IMember, INav { }

const Rocket: React.FC<IProps> = ({ name, navigation, image, agency }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Crew Member', { name })}
  >
    <MembersCard>
      <Image source={{ uri: image }} style={{ height: 48, width: 48 }} />
      <SmallNormal style={{ marginRight: 0 }}>{name}</SmallNormal>
      <SmallBold>{agency}</SmallBold>
    </MembersCard>
  </TouchableOpacity>
);

export default Rocket;
