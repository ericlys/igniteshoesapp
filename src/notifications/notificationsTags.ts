import OneSignal from "react-native-onesignal";

export function tagUserInfo() {
  OneSignal.sendTags({  
    'user_name': 'Ericlys',
    'user_email': 'ericlysm@gmail.com',
  })
}

export function tagCartUpdate(itensCount: string) {
  OneSignal.sendTag('cart_items_count', itensCount)
}