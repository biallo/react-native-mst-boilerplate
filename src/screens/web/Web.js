import React, {
  Node,
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useTranslation } from 'react-i18next';
import { V } from '../../styles';
import { LANGUAGES } from '../../utils/Constants';
import BottomTabs from '../../components/navigation/BottomTabs';

const Web: () => Node = (props) => {
  const { store, navigation } = props;
  const { t } = useTranslation();

  return (
    <SafeAreaView style={V.wrapper}>
      <Text style={styles.subTitle}>{t('common:web')} - WebView</Text>
      <WebView
        style={styles.webView}
        source={{
          uri: 'https://github.com/biallo/react-native-mst-boilerplate'
        }}
        setBuiltInZoomControls={false}
      />
      <BottomTabs
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    marginVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'left'
  },
  webView: {
    flex: 1
  }
});

export default inject('store')(observer(Web));
