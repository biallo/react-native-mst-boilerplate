import {name as appName} from '../../app.json';
import {
  types,
  onSnapshot,
  flow
} from 'mobx-state-tree';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { resetAxiosAuth, resetAxiosOpen } from '../utils/axios';
import Keys from '../config/Keys';

import { Auth as auth } from './auth';
import { User as user } from './user';

export const Store = types
  .model('Store', {
    auth,
    user
  })
  .actions(self => ({
    makeInit: flow(function* () {
      let done = false;

      yield makeAccount();

      resetAxiosOpen();
      resetAxiosAuth();

      done = true;
      return done;
    })
  }))
  .create({
    auth: {},
    user: {}
  });

export const createStore = () => {
  return Store.makeInit();
};

const makeAccount = flow(function* () {
  const data = yield AsyncStorage.getItem(`${appName}_ACCOUNT_${Keys.storeVersion}`);

  if (data !== null) {
    yield Store.auth.updateAccount(JSON.parse(data));
  }
});
