import styled from 'styled-components/native';

import { dark } from './colors';

const SmallNormal = styled.Text`
  font-size: 16px;
  margin-right: auto;
  color: ${dark.light};
`;

const SmallBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${dark.light};
`;

const MediumBold = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  color: ${dark.light};
`;

const MediumNormal = styled.Text`
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: ${dark.light};
`;

const MediumItalic = styled.Text`
  font-style: italic;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  color: ${dark.light};
`;

export { SmallNormal, SmallBold, MediumBold, MediumNormal, MediumItalic };
