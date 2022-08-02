import { CommonActions } from '@react-navigation/native';
import { Store } from '../stores';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params
    })
  );
};

const goBack = () => {
  navigator.dispatch(CommonActions.back());
};

export default {
  setTopLevelNavigator,
  navigate,
  goBack
};
