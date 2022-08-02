import {
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import Colors from './Colors';

const os = Platform.OS;
const isAndroid = os === 'android';
const statusBarHeight = isAndroid ? 0 : StatusBar.currentHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const wrapper = {
  flex:1,
  backgroundColor: '#fff'
};

const listItem = {
  borderColor: '#ddd',
  paddingHorizontal: 15
};

const formInput = {
  height: 40,
  marginBottom: 20,
  marginHorizontal: 15,
  padding: 10,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#bbb'
};

const btnPrimary = {
  marginHorizontal: 15,
  marginVertical: 15,
  paddingVertical: 10,
  backgroundColor: Colors.primary,
  borderRadius: 5,
  alignItems: 'center'
};

const btnPrimaryText = {
  fontSize: 14,
  color: '#fff'
};

const btnCancel = {
  marginHorizontal: 15,
  marginVertical: 15,
  paddingVertical: 10,
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
  alignItems: 'center'
};

const btnCancelText = {
  fontSize: 14,
  color: '#222'
};

const btnDisabled = {
  marginHorizontal: 15,
  marginVertical: 15,
  paddingVertical: 10,
  backgroundColor: '#e0e0e0',
  borderRadius: 5,
  alignItems: 'center'
};

const btnDisabledText = {
  fontSize: 14,
  color: '#a6a6a6'
};

export default {
  os,
  isAndroid,
  statusBarHeight,
  windowWidth,
  windowHeight,
  wrapper,
  listItem,
  formInput,
  btnPrimary,
  btnPrimaryText,
  btnCancel,
  btnCancelText,
  btnDisabled,
  btnDisabledText
};
