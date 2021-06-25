import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from '../styles/theme';
import { styles } from '../styles/components/Load';

export function Load() {
   return (
      <View style={styles.container}>
         <ActivityIndicator
            size='large'
            color={theme.colors.primary}
         />
      </View>
   );
};
