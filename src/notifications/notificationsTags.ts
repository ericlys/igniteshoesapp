import OneSignal from "react-native-onesignal";

export function tagUserInfo() {
  OneSignal.sendTags({  
    'user_name': 'Ericlys',
    'user_email': 'ericlysm@gmail.com',
  })
}