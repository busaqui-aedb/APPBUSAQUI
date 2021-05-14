import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import MainStack from './src/navigators/MainStack';
import { store, persistor } from './src/store';



export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainStack />
    </PersistGate>{/*Fim PersistGate */}
  </Provider>/*Fim Provider*/
)/*Fim Export default*/