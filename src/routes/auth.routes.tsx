import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/app/Home';
import { AppointmentDetails } from '../screens/app/AppointmentDetails';
import { AppointmentCreate } from '../screens/app/AppointmentCreate';
import { SignIn } from '../screens/auth/SignIn';

import { theme } from '../styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
   return (
      <Navigator
         headerMode='none'
         screenOptions={{
            cardStyle: {
               backgroundColor: theme.colors.secondary100
            }
         }}
      >
         <Screen name='SignIn' component={SignIn} />
         <Screen name='Home' component={Home} />
         <Screen name='AppointmentDetails' component={AppointmentDetails} />
         <Screen name='AppointmentCreate' component={AppointmentCreate} />
      </Navigator>
   );
};
