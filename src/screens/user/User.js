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
  Text
} from 'react-native';
import moment from 'moment-timezone';
import { ACCOUNT_ACTIVITIES_TYPE } from '../../utils/Constants';
import { V } from '../../styles';
import BottomTabs from '../../components/navigation/BottomTabs';

const User: () => Node = (props) => {
  const { store, navigation } = props;
  const { id } = store.auth.userInfo;
  const [activities, setActivities] = useState();

  useEffect(() => {
    (async function () {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    await store.user.getActivities({
      id: id
    });
    setActivities(store.user.activities);
  };

  if (!activities) {
    return null;
  }

  return (
    <SafeAreaView style={V.wrapper}>
      <ScrollView>
        <Text style={{ textAlign: 'center' }}>账户活动</Text>
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
                  类型
                </Text>
                <Text>{ACCOUNT_ACTIVITIES_TYPE[item.actionType]}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  所在地
                </Text>
                <Text>{item.location}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  IP 地址
                </Text>
                <Text>{item.ip}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  时间
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
                  类型
                </Text>
                <Text>{ACCOUNT_ACTIVITIES_TYPE[item.actionType]}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  所在地
                </Text>
                <Text>{item.location}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  IP 地址
                </Text>
                <Text>{item.ip}</Text>
              </View>
              <View style={styles.listItem}>
                <Text
                  style={styles.listHelperText}
                >
                  时间
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
  listWrapper: {
    flex: 1,
    marginTop: 15,
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
