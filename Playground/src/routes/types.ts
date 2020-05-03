import { Options } from 'react-native-navigation'

export type NavigationProps = {
  componentId: string
}

export type NavigationOptions<Props> = {
  options?: ((props: Props) => Options) | Options
}

export type RootType<Props = {}> = React.FC<NavigationProps & Props> & NavigationOptions<Props>
