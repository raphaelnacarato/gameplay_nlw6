import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../styles/theme';
import { styles } from '../styles/components/Avatar';

interface Props {
   urlImage: string;
}

export function Avatar({ urlImage }: Props) {
   const { secondary50, secondary70 } = theme.colors;

   return (
      <LinearGradient
         style={styles.container}
         colors={[secondary50, secondary70]}
      >
         <Image
            source={{ uri: urlImage }}
            style={styles.avatar}
         />
      </LinearGradient>
   );
};
