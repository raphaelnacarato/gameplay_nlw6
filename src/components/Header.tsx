import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from '../styles/components/Header';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../styles/theme';

interface Props {
   title: string;
   action?: ReactNode;
};

export function Header({ title, action }: Props) {
   const { heading, secondary100, secondary40 } = theme.colors;

   const { goBack } = useNavigation();

   function handleGoBack() {
      goBack();
   };

   return (
      <LinearGradient
         style={styles.container}
         colors={[secondary100, secondary40]}
      >
         <BorderlessButton onPress={handleGoBack}>
            <Feather name='arrow-left' color={heading} size={24} />
         </BorderlessButton>

         <Text style={styles.title}>{title}</Text>

         {action &&
            <View>
               {action}
            </View>
         }

      </LinearGradient>
   );
};
