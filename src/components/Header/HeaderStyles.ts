import {StyleSheet} from 'react-native'
import {screen, theme} from '~/theme'

export const styles = StyleSheet.create({
  container: {
    height: 44,
    width: screen.width,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row',
    display: 'flex',
  },
  title: {
    fontSize: 17,
    color: theme.primary,
    fontWeight: '500',
  },
  back: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
})

