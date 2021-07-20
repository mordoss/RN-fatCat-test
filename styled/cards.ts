import styled from 'styled-components/native';

import { dark } from './colors';

const RocketCard = styled.View`
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;

const RocketCardInfo = styled.View`
  margin-top: -24px;
  background-color: ${dark.gray};
  padding: 24px;
  align-items: stretch;
  border-radius: 20px;
`;

const MembersCard = styled.View`
  border: 1px solid black;
`;

const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-bottom: 8px;
`;

const ButtonLink = styled.Pressable`
  padding: 8px;
  margin-top: 24px;
  border-radius: 10px;
  border-color: ${dark.primaryLight};
  border-width: 1px;
  background-color: ${dark.grayLight};
`;

export { RocketCard, MembersCard, RocketCardInfo, CardItem, ButtonLink };
