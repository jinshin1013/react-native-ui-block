import React from 'react'

import { RootType } from '../routes/types'
import { View, Text } from 'react-native'

export type RootProps = {}

export const Root: RootType<RootProps> = ({ componentId }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ROOT SCREEN!</Text>
    </View>
  )
}
