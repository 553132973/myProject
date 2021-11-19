import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    zh: {
      name: '管理首页',
    },
    'pt-br': {
      name: 'Dashboard',
    },
    route: '/dashboard',
  },
  {
    id: '6',
    name: 'issue',
    zh: {
      name: '发表文章',
    },
    icon: 'edit',
    route: '/issue',
  },
  {
    id: '2',
    name: 'Users',
    zh: {
      name: '用户管理',
    },
    'pt-br': {
      name: 'Usuário',
    },
    icon: 'user',
    route: '/user',
  },
  // {
  //   id: '7',
  //   breadcrumbParentId: '1',
  //   name: 'Posts',
  //   zh: {
  //     name: '用户管理',
  //   },
  //   'pt-br': {
  //     name: 'Posts',
  //   },
  //   // icon: 'shopping-cart',
  //   route: '/post',
  // },
  {
    id: '21',
    menuParentId: '-1',
    breadcrumbParentId: '2',
    name: 'User Detail',
    zh: {
      name: '用户详情',
    },
    'pt-br': {
      name: 'Detalhes do usuário',
    },
    route: '/user/:id',
  },
  {
    id: '3',
    breadcrumbParentId: '1',
    name: 'Request',
    zh: {
      name: 'Request',
    },
    'pt-br': {
      name: 'Requisição',
    },
    route: '/request',
  },
  {
    id: '4',
    breadcrumbParentId: '1',
    name: 'UI Element',
    zh: {
      name: 'UI组件',
    },
    'pt-br': {
      name: 'Elementos UI',
    },
  },
  {
    id: '45',
    breadcrumbParentId: '4',
    menuParentId: '4',
    name: 'Editor',
    zh: {
      name: 'Editor',
    },
    'pt-br': {
      name: 'Editor',
    },
    // icon: 'edit',
    route: '/editor',
  },
  {
    id: '66',
    name: 'articleList',
    zh: {
      name: '文章列表',
    },
    icon: 'YuqueOutlined',
    route: '/articleList',
  },
  {
    id: '67',
    name: 'mockData',
    zh: {
      name: 'mock数据',
    },
    route: '/mockData',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
