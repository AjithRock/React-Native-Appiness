import React from 'react';
import Login from './components/login/login';
import EmployeeList from './components/list/empList';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: null, headerTransparent: true, headerLeft: null}}
        />
        <Stack.Screen
          name="EmployeeList"
          component={EmployeeList}
          options={{title: 'Employee List', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
