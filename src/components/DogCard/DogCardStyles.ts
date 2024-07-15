import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150, // Adjust height based on your needs
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bredFor: {
    fontSize: 14,
    color: '#666',
  },
})

