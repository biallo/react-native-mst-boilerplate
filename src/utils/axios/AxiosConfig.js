import {name as appName} from '../../../app.json';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../../stores';
import { LOCALE } from '../Constants';
import Keys from '../../config/Keys';

export const getAuthToken = () => {
  return Store.auth.userInfo.token;
};

export const getLanguage = async () => {
  const code = await AsyncStorage.getItem(`${appName}_LANGUAGE_${Keys.storeVersion}`);
  // 用于通知后端当前应用使用的语言，可根据后端的规则在 ../Constants.js 中进行配置
  return LOCALE[code];
}

export const getResult = (response) => {
  if (Store && response) {
    const data = response.data;

    if (data.code === 0) {
      return data;
    }

    // 提示错误消息（实际项目中推荐可替换为你认为体验更好的提示方式）
    Alert.alert(
      data.code,
      data.msg
    );

    if (data.code === 4000) { // 未登录
      Store.auth.unauthorized(true);
    } else { // 其它错误
      return null;
    }
  }
}

export const getErrorObject = (response) => {
  let errorCode = 'unknown';
  let errorMessage = '';
  const statusCode = response ? response.status : -1;
  if (response && response.data) {
    errorCode = response.data.statusCode;
    errorMessage = response.data.message;
  }

  return {
    message: statusCode === 500 || statusCode === 404 ? errorCode : errorMessage,
    status: statusCode
  };
}

export const reactOnStatusCode = (error) => {
  if (Store && error) {
    switch (error.status) {
      case 400:
        alert(`${error.status} ${error.message}`);
        break;
      case 401:
        Store.auth.unauthorized(true);
        break;
      case 403:
        Store.auth.unauthorized(true);
        break;
      default:
    }
  }
}
