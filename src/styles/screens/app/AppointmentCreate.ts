import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   label: {
      fontFamily: theme.fonts.title700,
      fontSize: 18,
      color: theme.colors.heading,
   },

   form: {
      paddingHorizontal: 24,
      marginTop: 32,
   },

   select: {
      flexDirection: 'row',
      width: '100%',
      height: 68,
      borderColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',
      paddingRight: 25,
      overflow: 'hidden',
   },

   selectBody: {
      flex: 1,
      alignItems: 'center',
   },

   image: {
      width: 64,
      height: 68,
      backgroundColor: theme.colors.secondary50,
      borderWidth: 1,
      borderRadius: 8,
      marginLeft: -1,
   },

   field: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
   },

   column: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   divider: {
      fontFamily: theme.fonts.text500,
      fontSize: 15,
      color: theme.colors.highlight,
      marginRight: 4,
   },

   caracteresLimit: {
      fontFamily: theme.fonts.text400,
      fontSize: 13,
      color: theme.colors.highlight,
   },

   footer: {
      paddingHorizontal: 24,
      marginVertical: 20,
      marginBottom: 25,
   },
});
