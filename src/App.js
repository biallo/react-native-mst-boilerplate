import { name as appName } from '../app.json';
import React, {
  Node,
  useState,
  useEffect
} from 'react';
import { Provider } from 'mobx-react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Store, createStore } from './stores';
import NavigationService from './navigation/NavigationService';
import Stacks from './navigation/Stacks';
import { V } from './styles';

const App: () => Node = () => {

  const [locale, setLocale] = useState();
  const [storeDone, setStoreDone] = useState(false);

  useEffect(() => {
    (async function () {
      const result = await createStore();
      setStoreDone(result);
    })();
  }, []);

  if (!storeDone) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Provider store={Store}>
      <NavigationContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      >
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
