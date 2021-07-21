/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import { Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { ModalWrapper, ModalContainer } from '../styled/modal';
import { ButtonLink } from '../styled/cards';
import { SmallNormal } from '../styled/typography';

interface IProps {
  modalVisible: boolean;
  cancel: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const ErrorModal: React.FC<IProps> = ({ modalVisible, cancel, message }) =>
  modalVisible ? (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <ModalWrapper>
        <ModalContainer>
          <FontAwesome5
            name="rocket"
            size={36}
            color="white"
            style={{ marginBottom: 16 }}
          />
          <SmallNormal>
            Houston, we have a problem {message} crashed!!!
          </SmallNormal>

          <ButtonLink
            onPress={() => {
              cancel(false);
            }}
          >
            <SmallNormal> Hide Modal</SmallNormal>
          </ButtonLink>
        </ModalContainer>
      </ModalWrapper>
    </Modal>
  ) : null;

export default ErrorModal;
