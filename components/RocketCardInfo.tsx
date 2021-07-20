import React from 'react';
import { Linking } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome5 } from '@expo/vector-icons';

import { Row } from '../styled/layout';
import {
  RocketCard as RocketCardContainer,
  CardItem,
  ButtonLink,
} from '../styled/cards';
import {
  MediumBold,
  SmallNormal,
  SmallBold,
  MediumNormal,
} from '../styled/typography';

interface IProps {
  name: string;
  mass: { kg: number };
  height: { meters: number };
  diameter: { meters: number };
  type: string;
  active: boolean;
  wikipedia: string;
  width: number;
}

const RocketCardInfo: React.FC<IProps> = ({
  name,
  mass,
  height,
  diameter,
  type,
  active,
  wikipedia,
  width,
}) => (
  <RocketCardContainer
    style={{
      width: 0.8 * width,
    }}
  >
    <MediumBold>{name}</MediumBold>
    <Row>
      <MediumNormal>{type}</MediumNormal>
      <MediumNormal>{active ? 'active' : 'inactive'}</MediumNormal>
    </Row>
    <CardItem>
      <FontAwesome5
        name="weight-hanging"
        size={24}
        color="grey"
        style={{ width: 36 }}
      />
      <SmallNormal>Weight:</SmallNormal>
      <SmallBold>{mass.kg} kg</SmallBold>
    </CardItem>

    <CardItem>
      <FontAwesome5
        name="ruler-vertical"
        size={24}
        color="grey"
        style={{ width: 36 }}
      />
      <SmallNormal>Height:</SmallNormal>
      <SmallBold>{height.meters} m</SmallBold>
    </CardItem>

    <CardItem>
      <FontAwesome5
        name="ruler-horizontal"
        size={24}
        color="grey"
        style={{ width: 36 }}
      />
      <SmallNormal>Diameter:</SmallNormal>
      <SmallBold>{diameter.meters} m</SmallBold>
    </CardItem>
    <ButtonLink
      title="More info"
      onPress={() => {
        Linking.openURL(wikipedia);
      }}
    >
      <MediumNormal>More Info</MediumNormal>
    </ButtonLink>
  </RocketCardContainer>
);

export default RocketCardInfo;
