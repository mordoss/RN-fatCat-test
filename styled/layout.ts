import styled from 'styled-components/native';

import { dark } from './colors';

const RocketsContainer = styled.View`
  flex: 1;
  background-color: ${dark.grayLight};
`;

const CrewMembersContainer = styled.ScrollView`
  background-color: ${dark.grayLight};
`;

export { RocketsContainer, CrewMembersContainer };
