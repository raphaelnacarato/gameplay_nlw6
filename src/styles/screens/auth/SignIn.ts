import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   image: {
      width: '100%',
      height: 360,
   },

   content: {
      marginTop: -40,
      paddingHorizontal: 50,
   },

   title: {
      fontFamily: theme.fonts.title700,
      fontSize: 40,
      lineHeight: 40,
      color: theme.colors.heading,
      textAlign: 'center',
      marginBottom: 16,
   },

   subtitle: {
      fontFamily: theme.fonts.title500,
      fontSize: 15,
      lineHeight: 25,
      color: theme.colors.heading,
      textAlign: 'center',
      marginBottom: 64,
   },
});
