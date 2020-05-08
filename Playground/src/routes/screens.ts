import { Navigation } from 'react-native-navigation'

import { Routes } from './routes'

import { Home } from '../screens/Home'
import { BaseLayoutDemo } from '../screens/BaseLayoutDemo'

/**
 * Register all screens.
 */
export function registerScreens() {
  const routes = new Map().set(Routes.Home, Home).set(Routes.BaseLayoutDemo, BaseLayoutDemo)

  Array.from(routes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => component)
  })
}
