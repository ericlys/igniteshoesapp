import { Platform, StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ONESIGNAL_ID } from '@env';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
// import { tagUserInfo } from './src/notifications/notificationsTags';
import { useEffect } from 'react';

//update ios key
const oneSignalAppId = Platform.OS === 'ios' ? 'IOS_KEY' : ONESIGNAL_ID; 
OneSignal.setAppId(oneSignalAppId);

//ios needs this
OneSignal.promptForPushNotificationsWithUserResponse(
//   response => { 
//   console.log(response)
// }
)

// OneSignal.setEmail('ericlysm@gmail.com'); 

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // tagUserInfo();

  useEffect(() => {
    const subscribe = OneSignal.setNotificationOpenedHandler((response) => { 

      const {actionId} = response.action as any;

      switch(actionId) {
        case '1':
          return console.log('Ver todas')
        case '2':
          console.log('Ver pedidos')
        default:
          console.log('Não foi clicado em nenhum botão de ação')
      }
    })

    return () => subscribe
  },[])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}