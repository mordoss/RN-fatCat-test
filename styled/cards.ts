import styled from 'styled-components/native';

import { dark } from './colors';

const RocketCard = styled.View`
  margin: 18px 0;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;

const RocketCardInfo = styled.View`
  margin-top: -24px;
  background-color: ${dark.darkBlue};
  padding: 24px;
  align-items: stretch;
  border-radius: 20px;
`;

const MemberCardInfo = styled.View`
  background-color: ${dark.darkBlue};
  padding: 24px;
  align-items: stretch;
  border-radius: 20px;
`;

const MembersCard = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${dark.dark};
  margin: 16px;
  padding: 12px 6px;
  border-radius: 8px;
`;

const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom-color: ${dark.secondary};
  border-bottom-width: 1px;
`;

const ButtonLink = styled.Pressable`
  padding: 8px;
  margin-top: 24px;
  border-radius: 10px;
  border-color: ${dark.primary};
  border-width: 1px;
  background-color: ${dark.grayLight};
`;

const ImageWrapper = styled.View`
  border-radius: ${(props: { imageWidth: number }) => props.imageWidth / 2}px;
  border-width: 4px;
  border-color: ${dark.primary};
`;

export {
  RocketCard,
  MembersCard,
  RocketCardInfo,
  CardItem,
  ButtonLink,
  ImageWrapper,
  MemberCardInfo,
};
