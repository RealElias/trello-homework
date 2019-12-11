import React, { Component } from 'react'
import connect from '../../core/store/connector'

import { getBoards } from '../../middleware/boards'
import BoardList from '../../components/boardList';
import Button from '../../components/button'
import BoardEditor from '../boardEditor';
import { openBoardEditor } from '../../core/boards/actions'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.onGetBoardsClick = this.onGetBoardsClick.bind(this)

    this.state = {
      boards: [],
      inProgress: false,
      showEditor: false,
    }
  }

  onGetBoardsClick(event) {
    event.preventDefault()

    this.props.getBoards()
  }

  render() {
    const { boards, inProgress, showEditor, openBoardEditor } = this.props

    return (
      <div>
        <BoardList
          boards={boards}
          inProgress={inProgress}
        />
        <BoardEditor
          showEditor={showEditor}
          title=''
          inProgress={inProgress}
        />
        <Button
          value='Refresh Boards'
          disabled={inProgress}
          onClick={this.onGetBoardsClick}
        />
        <Button
          value='New Board'
          disabled={inProgress}
          onClick={openBoardEditor}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
    getBoards,
    openBoardEditor,
}

function mapStateToProps(state) {
  const { inProgress, boards, showEditor } = state.boards
  return { inProgress, boards, showEditor }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)