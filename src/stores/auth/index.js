import {
  types,
  flow
} from 'mobx-state-tree';
import {name as appName} from '../../../app.json';
import Keys from '../../config/Keys';
import NavigationService from '../../navigation/NavigationService';
import { resetAxiosAuth } from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../../services/AuthService';
import { AuthInfoType } from './AuthTypes';

export const Auth = types
  .model('Auth', {
    userInfo: types.optional(AuthInfoType, {}),
  })
  .views(self => ({
    get isAuthorized() {
      return !!self.userInfo.token;
    },
  }))
  .actions(self => ({
    async updateAccount(data) {
      self.userInfo = data;

      await AsyncStorage.setItem(
        `${appName}_ACCOUNT_${Keys.storeVersion}`,
        JSON.stringify(data)
      );

      resetAxiosAuth();
    },
    checkNeedLogin(redirectTo) {
      if (!self.isAuthorized) {
        NavigationService.navigate('/', { redirectTo });
      }
      return !self.isAuthorized;
    },
    unauthorized(jumpToLogin) {
      self.removeAccount();

      if (jumpToLogin) {
        NavigationService.navigate('/');
      }
    },
    async removeAccount() {
      self.userInfo = {};

      await AsyncStorage.removeItem(`${appName}_ACCOUNT_${Keys.storeVersion}`);
      resetAxiosAuth();
    },
  }))
  .actions(self => ({
    async login(params) {
      // return await authService.login(params);

      // fake data
      return {
        code: 0,
        data: {
          token: 'xxxxxxx',
          id: 111,
          email: 'xxx@xxx.xxx',
          name: 'xxx',
          scope: 1,
          createdTime: '2022-01-01T11:11:11.000Z'
        }
      };
    }
  }));
