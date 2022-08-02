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
import Images from '../../assets/Images';
import { V } from '../../styles';
import BottomTabs from '../../components/navigation/BottomTabs';

const Home: () => Node = (props) => {
  const { store, navigation } = props;

  const handleLogout = async () => {
    await store.auth.removeAccount();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={V.wrapper}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image
            source={Images.logo}
            style={styles.logo}
          />
          <Text>首页</Text>
        </View>

        <TouchableOpacity
          style={V.btnCancel}
          onPress={handleLogout}
        >
          <Text
            style={V.btnCancelText}
          >
            登出
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
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  logo: {
    width: 80,
    height: 80,
    marginVertical: 20
  }
});

export default inject('store')(observer(Home));
