import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { styles } from '../styles/components/ModalView';
import { Background } from './Background';

interface Props extends ModalProps {
   children: ReactNode;
   closeModal: () => void;
};


export function ModalView({ children, closeModal, ...rest }: Props) {
   return (
      <Modal
         transparent
         animationType='slide'
         statusBarTranslucent
         {...rest}
      >
         <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}>
               <View style={styles.container}>
                  <Background>
                     <View style={styles.bar} />
                     {children}
                  </Background>
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Modal>

   );
};
