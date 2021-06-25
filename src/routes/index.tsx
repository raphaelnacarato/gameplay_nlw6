import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';

import { SignIn } from '../screens/auth/SignIn';
import { AppRoutes } from './app.routes';

export function Routes() {
   const { user } = useAuth();

   return (
      <NavigationContainer>
         {user.id ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
   );
};
