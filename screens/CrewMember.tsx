/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Linking } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

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
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

  useEffect(() => {
    setMember(route.params);
  }, [route.params]);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestPermissionsAsync();
      const { status: galleryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasCameraPermission(cameraStatus === 'granted');
      setHasGalleryPermission(galleryStatus === 'granted');
    })();
  }, []);

  return member ? (
    <CrewMemberContainer>
      <ImageWrapper imageWidth={0.6 * width}>
        <Image
          source={
            hasCameraPermission && hasGalleryPermission
              ? { uri: member.image }
              : require('../assets/silhouette.png')
          }
          style={{
            height: 0.6 * width,
            width: 0.6 * width,
            borderRadius: 0.3 * width,
            margin: 4,
            overflow: 'hidden',
          }}
        />
      </ImageWrapper>
      {hasCameraPermission && hasGalleryPermission ? (
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
      ) : (
        <MediumNormal>You have no permission to view this</MediumNormal>
      )}
    </CrewMemberContainer>
  ) : (
    <MediumNormal>Loading...</MediumNormal>
  );
};

export default CrewMember;
