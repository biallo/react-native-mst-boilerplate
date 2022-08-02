import { Alert } from "react-native";
import { Store } from '../../stores';
import { LOCALE } from '../Constants';

export function getAuthToken() {
  return Store.auth.token;
}

export function getLanguage() {
  // 用于通知后端当前应用使用的语言，可根据后端的
  return LOCALE[Store.language.locale];
}

export function getResult(response) {
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

export function getErrorObject(response) {
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

export function reactOnStatusCode(error) {
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
