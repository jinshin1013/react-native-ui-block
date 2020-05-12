import { Navigation } from 'react-native-navigation'

import { Routes } from './routes'

/**
 * Register all screens.
 */
export function registerScreens() {
  const routes = new Map()
    .set(Routes.Home, require('../screens/Home').Home)
    .set(Routes.BaseLayoutDemo, require('../screens/BaseLayoutDemo').BaseLayoutDemo)
    .set(Routes.AnimatorDemo, require('../screens/AnimatorDemo').AnimatorDemo)

  Array.from(routes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => component)
  })
}
