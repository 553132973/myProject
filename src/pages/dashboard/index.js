import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Page, ScrollBar } from 'components'
import styles from './index.less'
import store from 'store'
import EditableTable from './components/EditableTable'

@connect(({ dashboard, loading }) => ({
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'dashboard/query',
    })
  }

  render() {
    return (
      <Page className={styles.dashboard}>
        <button>提交</button>
        <p>sss</p>
        <EditableTable />
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
