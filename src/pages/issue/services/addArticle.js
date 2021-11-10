import { request, config } from 'utils'

const { api } = config
const { addArticle } = api

export function query(params) {
  return request({
    url: dashboard,
    method: 'get',
    data: params,
  })
}