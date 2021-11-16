import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd'
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
    const columns = [
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'time',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '_id',
        dataIndex: '_id',
        key: '_id',
      },
    ]
    return (
      <div>
        <Table columns={columns} dataSource={[]} />
      </div>
    )
  }
}

export default index
