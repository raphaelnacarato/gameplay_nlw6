import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../styles/theme';
import { styles } from '../styles/components/ButtonAdd';


export function ButtonAdd({ ...rest }: RectButtonProps) {
   return (
      <RectButton
         style={styles.container}
         {...rest}
      >
         <MaterialCommunityIcons
            name='plus'
            color={theme.colors.heading}
            size={24}
         />
      </RectButton>
   );
};
