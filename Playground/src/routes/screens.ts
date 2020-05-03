import { Navigation } from 'react-native-navigation'

import { Routes } from './routes'

import { Root } from '../screens/Root'

/**
 * Register all screens.
 */
export function registerScreens() {
  const routes = new Map().set(Routes.Root, Root)

  Array.from(routes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => component)
  })
}
