//Packages
import React from 'react';
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react';

// Types
import ModalTypes from 'types/ModalTypes';

function Modal(props: ModalTypes) {
    return (
        <ChakraModal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>{props.children}</ModalContent>
        </ChakraModal>
    );
}

export default Modal;
