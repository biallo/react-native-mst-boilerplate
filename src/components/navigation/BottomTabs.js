import React, {
  Node,
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
import { C, V } from '../../styles';

const BottomTabs: () => Node = (props) => {
  const { store, navigation } = props;
  const route = useRoute();

  const goTo = (name) => {
    if (name === route.name) {
      return;
    }

    navigation.navigate(name);
  };

  return (
    <View style={styles.tabsWrapper}>
      <View style={styles.tabsItem}>
        <TouchableOpacity
          onPress={() => goTo('Home')}
        >
          <Icons
            name='home'
            style={[
              styles.tabsIcon,
              route.name === 'Home'
              ? styles.active
              : ''
            ]}
          />
          <Text
            style={[
              styles.tabsText,
              route.name === 'Home'
              ? styles.active
              : ''
            ]}
          >
            首页
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsItem}>
        <TouchableOpacity
          onPress={() => goTo('User')}
        >
          <Icons
            name='account'
            style={[
              styles.tabsIcon,
              route.name === 'User'
              ? styles.active
              : ''
            ]}
          />
          <Text
            style={[
              styles.tabsText,
              route.name === 'User'
              ? styles.active
              : ''
            ]}
          >
            用户
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 50,
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
