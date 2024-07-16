import {StyleSheet} from 'react-native'
import {theme} from '~/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    color: theme.grey1,
  },
})

