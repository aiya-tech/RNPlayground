import http from './apiClient'

export const getImage = () => {
  return http.get('/images/search?limit=20')
}
