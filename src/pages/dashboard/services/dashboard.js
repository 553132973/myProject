import { request, config } from 'utils'

const { api } = config
const { dashboard } = api

export function query() {
  return request({
    url: '/bar',
    method: 'get',
  })
}
