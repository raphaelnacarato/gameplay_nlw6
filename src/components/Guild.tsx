import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from './GuildIcon';

import { theme } from '../styles/theme';
import { styles } from '../styles/components/Guild';

export interface GuildProps {
   id: string;
   name: string;
   icon: string | null;
   owner: boolean;
};

interface Props extends TouchableOpacityProps {
   data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
   return (
      <TouchableOpacity
         style={styles.container}
         activeOpacity={0.7}
         {...rest}
      >
         <GuildIcon />

         <View style={styles.content}>
            <View>
               <Text style={styles.title}>{data.name}</Text>
               <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
            </View>
         </View>

         <Feather name='chevron-right' size={24} color={theme.colors.heading} />
      </TouchableOpacity>
   );
};
