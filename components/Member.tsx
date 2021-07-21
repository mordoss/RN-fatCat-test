import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { SmallNormal, SmallBold } from '../styled/typography';

import { MembersCard } from '../styled/cards';
import { IMember, IProps as INav } from '../screens/CrewMembers';

// eslint-disable-next-line prettier/prettier
interface IProps extends IMember, INav { }

const Rocket: React.FC<IProps> = ({
  name,
  navigation,
  image,
  agency,
  wikipedia,
  status,
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('Crew Member', {
        name,
        image,
        agency,
        wikipedia,
        status,
      })
    }
  >
    <MembersCard>
      <Image
        source={{ uri: image }}
        style={{ height: 48, width: 48, borderRadius: 24 }}
      />
      <SmallNormal style={{ marginRight: 0 }}>{name}</SmallNormal>
      <SmallBold>{agency}</SmallBold>
    </MembersCard>
  </TouchableOpacity>
);

export default Rocket;
