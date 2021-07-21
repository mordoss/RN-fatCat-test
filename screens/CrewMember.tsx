import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Linking } from 'react-native';
import { Camera } from 'expo-camera';

import { CrewMemberContainer } from '../styled/layout';
import {
  ImageWrapper,
  MemberCardInfo,
  CardItem,
  ButtonLink,
} from '../styled/cards';
import { SmallBold, SmallNormal, MediumNormal } from '../styled/typography';

const { width } = Dimensions.get('window');

interface IMember {
  image: string;
  name: string;
  agency: string;
  status: string;
  wikipedia: string;
}

// TODO check type for navigation route in docs & merge /w props
const CrewMember = ({ route }) => {
  const [member, setMember] = useState<IMember>();

  useEffect(() => {
    setMember(route.params);
  }, [route.params]);

  return member ? (
    <CrewMemberContainer>
      <ImageWrapper imageWidth={0.6 * width}>
        <Image
          source={{ uri: member.image }}
          style={{
            height: 0.6 * width,
            width: 0.6 * width,
            borderRadius: 0.3 * width,
            margin: 4,
          }}
        />
      </ImageWrapper>
      <MemberCardInfo
        style={{
          width: 0.8 * width,
        }}
      >
        <CardItem>
          <SmallNormal>Name:</SmallNormal>
          <SmallBold>{member.name}</SmallBold>
        </CardItem>

        <CardItem>
          <SmallNormal>Agency:</SmallNormal>
          <SmallBold>{member.agency}</SmallBold>
        </CardItem>

        <CardItem>
          <SmallNormal>Status:</SmallNormal>
          <SmallBold>{member.status}</SmallBold>
        </CardItem>

        <ButtonLink
          title="More info"
          onPress={() => {
            Linking.openURL(member.wikipedia);
          }}
        >
          <MediumNormal>More Info on Wiki</MediumNormal>
        </ButtonLink>
      </MemberCardInfo>
    </CrewMemberContainer>
  ) : (
    <MediumNormal>Loading...</MediumNormal>
  );
};

export default CrewMember;
