import styled from 'styled-components/native';

import { dark } from './colors';

const RocketsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${dark.grayLight};
  padding-top: 36px;
`;

const CrewMembersContainer = styled.ScrollView`
  background-color: ${dark.grayLight};
`;

const CrewMemberContainer = styled.View`
  flex: 1;
  background-color: ${dark.grayLight};
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.TextInput`
  font-size: 24px;
  margin: 16px;
  margin-top: 36px;
  background-color: ${dark.light};
  height: 36px;
  padding: 4px;
  border-radius: 4px;
`;

export { RocketsContainer, CrewMembersContainer, CrewMemberContainer, Input };
