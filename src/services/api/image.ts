import http from './apiClient'

export const getImages = (limit: number = 20, page: number = 1) => {
  return http.get(`/images/search?limit=${limit}&page=${page}`)
}
