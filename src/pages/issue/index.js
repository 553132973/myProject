import React from 'react'
import E from 'wangeditor'
import { Page, ScrollBar } from 'components'
import axios from 'axios'
import { Button, Input, message } from 'antd'
import css from './index.less'
import { connect } from 'umi'

@connect(({ issue, loading }) => ({ issue, loading }))
export default class Demo extends React.Component {
  state = {
    editorState: '',
    htmlVal: '',
  }
  componentDidMount() {
    const editor = new E('#div1')
    editor.config.uploadImgShowBase64 = true
    this.editorOnchange(editor)
    editor.create()
  }

  editorOnchange = (editor) => {
    editor.config.onchange = (newHtml) => {
      this.setState({
        editorState: editor,
      })
    }
  }

  getHtml = () => {
    const { editorState, title } = this.state
    const { dispatch, user, loading, i18n } = this.props
    let myDate = new Date()
    let currentTime = myDate.toLocaleDateString() //获取当前日期
    if (!title) {
      message.warning('请输入标题')
    } else if (!editorState.txt) {
      message.warning('请输入内容')
    } else {
      const paramVal = {
        htmlVal: editorState.txt.html(),
        currentTime: currentTime,
        title: title,
      }
      dispatch({
        type: 'issue/addArticle',
        payload: paramVal,
      })
    }
  }
  titleChange = (e) => {
    this.setState({
      title: e.currentTarget.value,
    })
  }
  render() {
    const { htmlVal } = this.state
    return (
      <Page>
        <div>
          <h2>标题</h2>
          <Input
            placeholder="请输入标题"
            className={css.title}
            onChange={(e) => this.titleChange(e)}
          />
          <h2 className={css.content}>内容</h2>
          <div id="div1"></div>
          <Button onClick={this.getHtml} className={css.content}>
            提交
          </Button>
        </div>
      </Page>
    )
  }
}
