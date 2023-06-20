import React, {
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { V } from '../../styles';
import { checkEmail } from '../../utils/Validate';

const Login = (props) => {
  const { store } = props;
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (email && pwd) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, pwd]);

  const handleSubmit = async () => {
    if (submitDisabled) {
      return;
    }

    if (!checkEmail(email)) {
      Alert.alert(t('auth:emailError1'));
      return;
    }

    if (pwd.length < 8 || pwd.length > 32) {
      Alert.alert(t('auth:pwdError1'));
      return;
    }

    // 实际项目中，密码等敏感数据应做非对称加密再通过网络传输及存储
    const res = await store.auth.login({
      email: email,
      pwd: pwd
    });

    if (res) {
      const data = res.data;

      await store.auth.updateAccount(data);

      Alert.alert(t('auth:loginSuccess'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={V.formInput}
        value={email}
        onChangeText={setEmail}
        placeholder={t('auth:email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={V.formInput}
        value={pwd}
        onChangeText={setPwd}
        secureTextEntry={true}
        placeholder={t('auth:pwd')}
      />

      <TouchableOpacity
        style={submitDisabled ? V.btnDisabled : V.btnPrimary}
        onPress={handleSubmit}
      >
        <Text
          style={submitDisabled ? V.btnDisabledText : V.btnPrimaryText}
        >
          {t('auth:login')}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  }
});

export default inject('store')(observer(Login));
