import React, {
  useState,
  useEffect
} from 'react';
import { observer, inject } from 'mobx-react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text
} from 'react-native';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
import { V } from '../../styles';
import BottomTabs from '../../components/navigation/BottomTabs';

const User = (props) => {
  const { store, navigation } = props;
  const { id } = store.auth.userInfo;
  const { t } = useTranslation();
  const [activities, setActivities] = useState();

  useEffect(() => {
    (async function () {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    await store.user.getActivities({
      uid: id
    });
    setActivities(store.user.activities);
  };

  if (!activities) {
    return null;
  }

  return (
    <SafeAreaView style={V.wrapper}>
      <ScrollView>
        <Text style={styles.subTitle}>{t('common:accountActivities')}</Text>
        <View style={styles.listWrapper}>
        {activities.map((item, index) => {
          return (
            <View
              key={item.id}
              style={styles.listRow}
            >
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  {t('common:accountType')}
                </Text>
                <Text>{t(`common:accountType${item.actionType}`)}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  {t('common:accountLocation')}
                </Text>
                <Text>{item.location}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  {t('common:accountIp')}
                </Text>
                <Text>{item.ip}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  {t('common:accountTime')}
                </Text>
                <Text>
                  {
                    moment(item.createdTime)
                      .utcOffset(8)
                      .format('YYYY-MM-DD HH:mm:ss')
                  }
                </Text>
              </View>
            </View>
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
  subTitle: {
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'left'
  },
  listWrapper: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15
  },
  listRow: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItem: {
    flexBasis: '50%',
    marginBottom: 10
  },
  listHelperText: {
    marginBottom: 5,
    fontSize: 12,
    color: '#777'
  }
});

export default inject('store')(observer(User));
