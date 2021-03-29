/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
// import HomeScreen from './src/screens/Home/index';
import RootNavigation from './src/navigation/index';
import {
  SafeAreaView,
  StatusBar,
  Text

} from 'react-native';

const App: () => Node = () => {


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
};



export default App;
