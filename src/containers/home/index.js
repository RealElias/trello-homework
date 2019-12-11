import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBoards } from '../../middleware/boards'
import BoardList from '../../components/boardList';
import Button from '../../components/button'
import BoardEditor from '../boardEditor';

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.onGetBoardsClick = this.onGetBoardsClick.bind(this)
    this.onNewBoardClick = this.onNewBoardClick.bind(this)

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
  
  onNewBoardClick() {
    console.log("click")
    this.setState({
      showEditor: true
    })
  }

  render() {
    const { boards, inProgress } = this.props
    const { showEditor } = this.state

    console.log(inProgress, showEditor)
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
          onClick={this.onNewBoardClick}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getBoards,
}

function mapStateToProps(state) {
  const { inProgress, boards, showEditor } = state.boards
  return { inProgress, boards, showEditor }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)