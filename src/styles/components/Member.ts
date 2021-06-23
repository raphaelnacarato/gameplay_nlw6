import { StyleSheet } from 'react-native';

import { theme } from '../theme';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
   },

   title: {
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading,
      fontSize: 18,
      marginBottom: 3,
   },

   status: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
   },

   bulletStatus: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 9,
   },

   nameStatus: {
      fontFamily: theme.fonts.text400,
      color: theme.colors.highlight,
      fontSize: 13,
   },
});
