import { Navigation } from 'react-native-navigation'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {},
          },
        ],
      },
    },
  })
})
