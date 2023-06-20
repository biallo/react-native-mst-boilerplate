import React, {
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { C, V } from '../../styles';

const BottomTabs = (props) => {
  const { store, navigation } = props;
  const { t } = useTranslation();
  const route = useRoute();
  const TABS = [{
    name: '/',
    label: 'home',
    icon: 'home'
  }, {
    name: 'User',
    label: 'user',
    icon: 'account'
  }, {
    name: 'Web',
    label: 'web',
    icon: 'web'
  }, {
    name: 'Setting',
    label: 'setting',
    icon: 'cog'
  }];

  const goTo = (name) => {
    if (name === route.name) {
      return;
    }

    navigation.navigate(name);
  };

  const handleActive = (name) => {
    return route.name === name ? styles.active : '';
  };

  return (
    <View style={styles.tabsWrapper}>
      {TABS.map((item, index) => {
        return (
          <View key={index} style={styles.tabsItem}>
            <TouchableOpacity
              onPress={() => goTo(item.name)}
            >
              <Icons
                name={item.icon}
                style={[
                  styles.tabsIcon,
                  handleActive(item.name)
                ]}
              />
              <Text
                style={[
                  styles.tabsText,
                  handleActive(item.name)
                ]}
              >
                {t(`bottomTabs:${item.label}`)}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 55,
    borderTopWidth: 1,
    borderColor: '#eee'
  },
  tabsItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabsIcon: {
    textAlign: 'center',
    fontSize: 24,
    color: '#777'
  },
  tabsText: {
    marginTop: 1,
    fontSize: 12,
    color: '#777'
  },
  active: {
    color: C.primary
  }
});

export default inject('store')(observer(BottomTabs));
