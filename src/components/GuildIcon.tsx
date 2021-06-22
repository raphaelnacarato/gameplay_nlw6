import React from 'react';
import { Image } from 'react-native';

import { styles } from '../styles/components/GuildIcon';

export function GuildIcon() {
   const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZleMLp59HqIDos_E9l48x9rdOanLFQC-EyUuzvQ6iwtqo7hwF2glEQFys_76fv-1fvKg&usqp=CAU'

   return (
      <Image
         source={{ uri: uri }}
         style={styles.image}
         resizeMode='cover'
      />

   );
};
