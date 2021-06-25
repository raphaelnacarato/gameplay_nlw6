import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/app/Home';
import { AppointmentDetails } from '../screens/app/AppointmentDetails';
import { AppointmentCreate } from '../screens/app/AppointmentCreate';

import { theme } from '../styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
   return (
      <Navigator
         headerMode='none'
         screenOptions={{
            cardStyle: {
               backgroundColor: theme.colors.secondary100
            }
         }}
      >
         <Screen name='Home' component={Home} />
         <Screen name='AppointmentDetails' component={AppointmentDetails} />
         <Screen name='AppointmentCreate' component={AppointmentCreate} />
      </Navigator>
   );
};
