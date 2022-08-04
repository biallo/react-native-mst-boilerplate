import React, {
  Node,
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Images from '../../assets/Images';
import { V } from '../../styles';
import BottomTabs from '../../components/navigation/BottomTabs';

const Home: () => Node = (props) => {
  const { store, navigation } = props;
  const { t } = useTranslation();

  const handleLogout = async () => {
    await store.auth.removeAccount();
    navigation.navigate('/');
  };

  return (
    <SafeAreaView style={V.wrapper}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.subTitle}>{t('common:home')}</Text>

        <View style={styles.logoContainer}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
          <Text>
            React Native
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            V.btnCancel
          ]}
          onPress={handleLogout}
        >
          <Text
            style={V.btnCancelText}
          >
            {t('common:logout')}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabs
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'left'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15
  },
  logo: {
    width: 80,
    height: 80,
    marginVertical: 10
  },
  btn: {
    marginTop: 30
  }
});

export default inject('store')(observer(Home));
