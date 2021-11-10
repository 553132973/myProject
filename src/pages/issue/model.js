import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import api from 'api'
const { pathToRegexp } = require("path-to-regexp")
import { model } from 'utils/model'

const { addArticle } = api


export default modelExtend(model, {
  namespace: 'issue',
  state: {

  },
  subscriptions: {
    setup({ dispatch, history }) {
      
    },
  },
  effects: {
    *addArticle({ payload }, { call, put }) {
      const data = yield call(addArticle, payload)
      console.log(data)
    //   yield put({
    //     type: 'updateState',
    //     payload: data,
    //   })
    },
  },
})
