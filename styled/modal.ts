import styled from 'styled-components/native';

import { dark } from './colors';

const ModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  padding: 35px;
`;

const ModalContainer = styled.View`
  background-color: ${dark.primary};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export { ModalWrapper, ModalContainer };
