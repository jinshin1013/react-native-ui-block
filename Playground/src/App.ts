import { Navigation } from 'react-native-navigation'

import { Routes } from './routes/routes'
import { registerScreens } from './routes/screens'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      backButton: {
        showTitle: false,
      },
    },
  })
  registerScreens()

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Routes.Home,
            },
          },
        ],
      },
    },
  })
})
