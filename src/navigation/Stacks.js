import React, {
  Node,
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';

import Login from '../screens/auth/Login';
import Home from '../screens/home/Home';
import User from '../screens/user/User';

const Stack = createNativeStackNavigator();

const Stacks: () => Node = (props) => {
  const { store } = props;
  const { token } = store.auth.userInfo;

  const renderStacks = () => {
    if (!token) {
      return (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      );
    }

    return (
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none'
      }}
    >
      {renderStacks()}
    </Stack.Navigator>
  );
};

export default inject('store')(observer(Stacks));
