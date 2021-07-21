/* eslint-disable global-require */
import React from 'react';
import { Modal } from 'react-native';

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
