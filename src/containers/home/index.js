import React, { Component } from 'react'
import connect from '../../core/store/connector'

import { getBoards, deleteBoard } from '../../middleware/boards'
import { signout } from '../../middleware/auth'
import BoardList from '../../components/boardList';
import Button from '../../components/button'
import BoardEditor from '../boardEditor';
import { openBoardEditor } from '../../core/boards/actions'

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.onGetBoardsClick = this.onGetBoardsClick.bind(this)
    this.onEditClick = this.onEditClick.bind(this)

    this.state = {
      boards: [],
      inProgress: false,
      showEditor: false,
    }
  }

  componentDidMount() {
    this.props.getBoards()
  }

  onGetBoardsClick(event) {
    event.preventDefault()

    this.props.getBoards()
  }

  onEditClick(id) {
    return function() {
      console.log(id);
    }
  }

  onDeleteClick(id) {
    return function() {
      deleteBoard(id);
    }
  }

  render() {
    const { 
      boards, 
      inProgress, 
      showEditor, 
      openBoardEditor, 
      signout, 
    } = this.props

    return (
      <div>
        <BoardList
          boards={boards}
          inProgress={inProgress}
          onEditClick={this.onEditClick}
          onDeleteClick={this.onDeleteClick}
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
        <br />
        <Button
          value='Logout'
          disabled={inProgress}
          onClick={signout}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
    getBoards,
    deleteBoard,
    openBoardEditor,
    signout,
}

function mapStateToProps(state) {
  const { inProgress, boards, showEditor } = state.boards
  return { inProgress, boards, showEditor }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)