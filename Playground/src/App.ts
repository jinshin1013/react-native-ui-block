import { Navigation } from 'react-native-navigation'

import { Routes } from './routes/routes'
import { registerScreens } from './routes/screens'

Navigation.events().registerAppLaunchedListener(() => {
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
