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
import { V } from '../../styles';
import { LANGUAGES } from '../../utils/Constants';
import BottomTabs from '../../components/navigation/BottomTabs';

const Setting: () => Node = (props) => {
  const { store, navigation } = props;
  const { t, i18n } = useTranslation();
  const selectedCode = i18n.language;

  const handleLanguage = (code) => {
    return i18n.changeLanguage(code);
  };

  const handleActive = (code, type) => {
    switch (type) {
      case 'btn':
        return selectedCode === code ? V.btnPrimary : V.btnCancel;
      case 'text':
        return selectedCode === code ? V.btnPrimaryText : V.btnCancelText;
    }
  };

  return (
    <SafeAreaView style={V.wrapper}>
      <ScrollView style={styles.container}>
        <Text style={styles.subTitle}>{t('common:selectLanguage')}</Text>
        <View style={styles.btnWrapper}>
          {LANGUAGES.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.btnItem,
                  handleActive(item.code, 'btn')
                ]}
                onPress={() => handleLanguage(item.code)}
              >
                <Text
                  style={handleActive(item.code, 'text')}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <BottomTabs
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subTitle: {
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'left'
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10
  },
  btnItem: {
    flex: 1
  }
});

export default inject('store')(observer(Setting));
