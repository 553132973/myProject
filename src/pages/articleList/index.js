import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import { connect } from 'umi'
@connect(({ app, loading }) => ({ app, loading }))
export class index extends Component {
  componentDidMount() {
    const { dispatch, user, loading, i18n } = this.props
    dispatch({
      type: 'app/articleList',
    })
  }
  render() {
    const { articleData } = this.props.app
    const columns = [
      {
        title: '_id',
        dataIndex: '_id',
      },
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '内容',
        dataIndex: 'htmlVal',
        render: (text) => {
          return <div dangerouslySetInnerHTML={{ __html: text }}></div>
        },
      },
      {
        title: '创建时间',
        dataIndex: 'currentTime',
      },
      {
        title: '操作',
        render: () => {
          return <Button type="primary">删除</Button>
        },
      },
    ]
    return (
      <div>
        <Table columns={columns} dataSource={articleData} />
      </div>
    )
  }
}

export default index
