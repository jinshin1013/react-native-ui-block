import { StyleSheet, ViewStyle } from 'react-native'

type Style = {
  wrapper: ViewStyle
}

export default StyleSheet.create<Style>({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
})
